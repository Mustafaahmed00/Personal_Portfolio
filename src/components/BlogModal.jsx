import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag } from 'lucide-react';

const BlogModal = ({ post, isOpen, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-tertiary rounded-2xl max-w-4xl w-full h-[90vh] border border-gray-700/50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white pr-4">{post.title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>By {post.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-500/30"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div 
                className="text-gray-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/\n/g, '<br>')
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-slate-800 p-4 rounded-lg overflow-x-auto my-4 border border-slate-700"><code class="text-emerald-300 font-mono text-sm">$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="bg-slate-800 px-2 py-1 rounded text-emerald-300 font-mono text-sm border border-slate-700">$1</code>')
                    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-white mb-4 border-b border-emerald-500/30 pb-2">$1</h1>')
                    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-emerald-300 mb-3 mt-6">$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold text-emerald-200 mb-2 mt-4">$1</h3>')
                    .replace(/^\* (.*$)/gm, '<li class="ml-4 text-gray-300">$1</li>')
                    .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4 text-gray-300">$2</li>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-emerald-200">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic text-emerald-100">$1</em>')
                }}
              />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">
                  Thanks for reading! Feel free to share your thoughts.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-emerald-500/25"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogModal; 