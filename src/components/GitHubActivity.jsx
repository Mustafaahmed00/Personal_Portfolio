import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { Github, Calendar, GitCommit, GitBranch, Star, Eye, Download, TrendingUp, Clock, Code, Users, GitPullRequest } from 'lucide-react';

const GitHubActivity = () => {
  const [githubData, setGithubData] = useState(null);
  const [recentCommits, setRecentCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GitHub username - replace with your actual username
  const username = 'Mustafaahmed00';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile data
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        const profileData = await profileResponse.json();
        
        // Fetch recent repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const reposData = await reposResponse.json();
        
        // Fetch recent commits (from public activity)
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=30`);
        const eventsData = await eventsResponse.json();
        
        // Fetch pull requests and contributions
        const pullRequestsResponse = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged`);
        const pullRequestsData = await pullRequestsResponse.json();
        
        // Process commit events
        const commits = eventsData
          .filter(event => event.type === 'PushEvent')
          .slice(0, 8)
          .map(event => ({
            id: event.id,
            repo: event.repo.name,
            message: event.payload.commits?.[0]?.message || 'Commit',
            date: new Date(event.created_at),
            sha: event.payload.commits?.[0]?.sha?.substring(0, 7) || '',
            url: `https://github.com/${event.repo.name}/commit/${event.payload.commits?.[0]?.sha}`
          }));

        // Calculate total commits from events
        const totalCommits = eventsData
          .filter(event => event.type === 'PushEvent')
          .reduce((sum, event) => sum + (event.payload.commits?.length || 0), 0);

        // Calculate open source contributions
        const openSourceRepos = reposData.filter(repo => !repo.fork);
        const forkedRepos = reposData.filter(repo => repo.fork);

        setGithubData({
          profile: profileData,
          repos: reposData,
          stats: {
            publicRepos: profileData.public_repos,
            totalCommits: totalCommits,
            totalStars: reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0),
            totalForks: reposData.reduce((sum, repo) => sum + repo.forks_count, 0),
            openSourceRepos: openSourceRepos.length,
            mergedPRs: pullRequestsData.total_count || 0,
            forkedRepos: forkedRepos.length
          }
        });
        
        setRecentCommits(commits);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to load GitHub data');
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  };

  if (loading) {
    return (
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={styles.sectionSubText}>GitHub Activity</p>
          <h2 className={styles.sectionHeadText}>Live Development</h2>
        </motion.div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={styles.sectionSubText}>GitHub Activity</p>
          <h2 className={styles.sectionHeadText}>Live Development</h2>
        </motion.div>
        <div className="text-center text-red-400">
          <p>{error}</p>
          <p className="text-sm text-gray-400 mt-2">Please check your GitHub username or try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className={styles.sectionSubText}>GitHub Activity</p>
        <h2 className={styles.sectionHeadText}>Live Development</h2>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
        >
          <div className="bg-tertiary p-4 rounded-xl text-center">
            <GitBranch className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <p className="text-white font-bold text-xl">{githubData.stats.publicRepos}</p>
            <p className="text-gray-400 text-sm">Repositories</p>
          </div>
          <div className="bg-tertiary p-4 rounded-xl text-center">
            <GitCommit className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-white font-bold text-xl">{githubData.stats.totalCommits}</p>
            <p className="text-gray-400 text-sm">Commits</p>
          </div>
          <div className="bg-tertiary p-4 rounded-xl text-center">
            <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <p className="text-white font-bold text-xl">{githubData.stats.totalStars}</p>
            <p className="text-gray-400 text-sm">Stars</p>
          </div>
          <div className="bg-tertiary p-4 rounded-xl text-center">
            <GitPullRequest className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-white font-bold text-xl">{githubData.stats.mergedPRs}</p>
            <p className="text-gray-400 text-sm">Merged PRs</p>
          </div>
          <div className="bg-tertiary p-4 rounded-xl text-center">
            <Code className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
            <p className="text-white font-bold text-xl">{githubData.stats.openSourceRepos}</p>
            <p className="text-gray-400 text-sm">Open Source</p>
          </div>
          <div className="bg-tertiary p-4 rounded-xl text-center">
            <Users className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <p className="text-white font-bold text-xl">{githubData.stats.forkedRepos}</p>
            <p className="text-gray-400 text-sm">Contributions</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Commits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <GitCommit className="w-6 h-6 text-green-400" />
              <h3 className="text-white text-xl font-bold">Recent Commits</h3>
            </div>
            
            <div className="space-y-4">
              {recentCommits.map((commit, index) => (
                <motion.div
                  key={commit.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black-100 p-4 rounded-xl hover:bg-black-200 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white text-sm font-medium truncate flex-1">
                      {commit.message}
                    </p>
                    <span className="text-gray-400 text-xs ml-2">
                      {getTimeAgo(commit.date)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <span className="font-mono bg-gray-800 px-2 py-1 rounded">
                      {commit.sha}
                    </span>
                    <span>•</span>
                    <span className="truncate">{commit.repo}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </motion.div>

          {/* Recent Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-tertiary p-6 rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-6 h-6 text-blue-400" />
              <h3 className="text-white text-xl font-bold">Recent Repositories</h3>
            </div>
            
            <div className="space-y-4">
              {githubData.repos.slice(0, 6).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black-100 p-4 rounded-xl hover:bg-black-200 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium truncate flex-1">
                      {repo.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      {repo.language && (
                        <span className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                          {repo.language}
                        </span>
                      )}
                      {repo.fork && (
                        <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          Fork
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {repo.description && (
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(new Date(repo.updated_at))}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-xs transition-colors"
                    >
                      View Repository →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(GitHubActivity, "github"); 