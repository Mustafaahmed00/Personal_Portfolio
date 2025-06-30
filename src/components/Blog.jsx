import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { Calendar, Clock, Tag, ArrowRight, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { blogPosts } from '../constants/blog';

const BlogCard = ({ post, index, onReadArticle, isExpanded }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to properly render markdown content
  const renderMarkdown = (content) => {
    return content
      // Remove the raw markdown symbols and convert to proper HTML
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-emerald-500/30">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-emerald-300 mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-emerald-200 mb-3 mt-6">$1</h3>')
      
      // Handle code blocks with proper styling
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `
          <div class="my-6 rounded-lg overflow-hidden border border-slate-600 bg-slate-900">
            <div class="bg-slate-800 px-4 py-2 border-b border-slate-600 flex items-center justify-end">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <pre class="p-4 m-0 overflow-x-auto"><code class="text-emerald-300 font-mono text-sm leading-relaxed">${code.trim()}</code></pre>
          </div>
        `;
      })
      
      // Handle inline code
      .replace(/`([^`]+)`/g, '<code class="bg-slate-800 px-2 py-1 rounded text-emerald-300 font-mono text-sm border border-slate-600">$1</code>')
      
      // Handle lists
      .replace(/^\* (.*$)/gm, '<li class="ml-6 text-gray-300 mb-2">• $1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 text-gray-300 mb-2">$1. $2</li>')
      
      // Handle bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-emerald-200">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-emerald-100">$1</em>')
      
      // Handle line breaks
      .replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed mb-4">')
      .replace(/\n/g, '<br>')
      
      // Wrap in paragraphs
      .replace(/^(?!<[h|d|p|u|o|b|p])(.*)$/gm, '<p class="text-gray-300 leading-relaxed mb-4">$1</p>')
      
      // Clean up empty paragraphs
      .replace(/<p class="text-gray-300 leading-relaxed mb-4"><\/p>/g, '')
      .replace(/<p class="text-gray-300 leading-relaxed mb-4"><br><\/p>/g, '');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-tertiary rounded-2xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
            <span>•</span>
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-500/30"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Read More Button */}
          <motion.div
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onReadArticle(post.id)}
          >
            <span className="font-medium">
              {isExpanded ? 'Show Less' : 'Read Article'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            )}
          </motion.div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-700/50 pt-6">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: renderMarkdown(post.content)
                }}
              />
              
              {/* Article Footer */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm">
                    Thanks for reading! Feel free to share your thoughts.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [expandedPost, setExpandedPost] = useState(null);

  // Get unique tags
  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleReadArticle = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className={styles.sectionSubText}>My Thoughts</p>
        <h2 className={styles.sectionHeadText}>Blog & Insights</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Sharing insights about modern web development, React ecosystem, and the latest technologies that shape our digital world.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-8 space-y-6"
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-tertiary border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="max-w-4xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index} 
                onReadArticle={handleReadArticle}
                isExpanded={expandedPost === post.id}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('All');
              }}
              className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-emerald-900/30 to-purple-900/30 p-8 rounded-2xl border border-emerald-500/30">
          <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Get notified when I publish new articles about React, web development, and emerging technologies.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-tertiary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Blog, "blog"); 