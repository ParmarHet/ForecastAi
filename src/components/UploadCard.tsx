import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle, AlertCircle, X } from 'lucide-react';

function UploadCard() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    setError('');
    
    // Validate file type
    const allowedTypes = ['.csv', '.xlsx', '.xls'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      setError('Please upload a CSV or Excel file (.csv, .xlsx, .xls)');
      return;
    }

    // Validate file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      setError('File size must be less than 50MB');
      return;
    }

    setUploadedFile(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadedFile) return;

    setIsProcessing(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsProcessing(false);
            navigate('/dashboard');
          }, 500);
          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-8">
      <div className="text-center mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Upload className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Upload Sales Data</h2>
        <p className="text-slate-300">Drag and drop your file or click to browse</p>
      </div>

      {!uploadedFile ? (
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 cursor-pointer ${
            isDragOver
              ? 'border-blue-400 bg-blue-900/20'
              : 'border-slate-600 hover:border-blue-400 hover:bg-slate-700/30'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className={`h-12 w-12 mx-auto mb-4 transition-colors duration-300 ${
            isDragOver ? 'text-blue-500' : 'text-slate-400'
          }`} />
          <p className="text-lg font-medium text-white mb-2">
            Drop your file here
          </p>
          <p className="text-slate-300 mb-4">
            or click to browse from your computer
          </p>
          <p className="text-sm text-slate-400">
            Supports CSV, Excel files up to 50MB
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="space-y-6">
          {/* File Preview */}
          <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-white">{uploadedFile.name}</p>
                  <p className="text-sm text-slate-400">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-900/30 rounded-lg transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Processing Progress */}
          {isProcessing && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Processing file...</span>
                <span className="text-blue-600 font-semibold">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Upload Button */}
          {!isProcessing && (
            <button
              onClick={handleUpload}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Upload className="h-5 w-5" />
              <span>Generate Forecast</span>
            </button>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-900/30 border border-red-700/50 rounded-xl flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}

export default UploadCard;