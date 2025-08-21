import React, { useState, useEffect } from 'react'
import { useLazyGetSummaryQuery } from '../../services/aiApi';
import { FiCopy, FiCheck, FiLink, FiLoader, FiBookmark } from "react-icons/fi";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState();
  const [length, setLength] = useState("2");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url, length });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);

      const filteredArticles = allArticles.filter(item => item.url !== article.url);
      const updatedAllArticles = [newArticle, ...filteredArticles];
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center px-4">
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg">
            <FiBookmark className="text-lg sm:text-2xl text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Article Summarizer
          </h1>
        </div>
        <p className="text-gray-600 text-sm sm:text-lg">Transform any article into digestible insights</p>
      </div>

      <div className="flex flex-col items-center justify-start w-full px-3 sm:px-4">
        <div className="w-full max-w-2xl">
          {/* Main Input Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 p-4 sm:p-8 mb-6 sm:mb-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* URL Input */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  Article URL
                </label>
                <div className="relative">
                  <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <FiLink className="text-lg sm:text-xl" />
                  </div>
                  <input
                    type="url"
                    placeholder="https://example.com/article..."
                    value={article.url}
                    onChange={(e) => setArticle({ ...article, url: e.target.value })}
                    required
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-lg text-gray-700 placeholder-gray-400 bg-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Length Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  Summary Length
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { value: "1", label: "Brief", desc: "Quick overview" },
                    { value: "2", label: "Medium", desc: "Balanced detail" },
                    { value: "3", label: "Detailed", desc: "Comprehensive" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setLength(option.value)}
                      className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                        length === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-base">{option.label}</div>
                      <div className="text-xs mt-1 opacity-70 hidden sm:block">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isFetching}
                className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg"
              >
                {isFetching ? (
                  <>
                    <FiLoader className="animate-spin text-lg sm:text-xl" />
                    Summarizing...
                  </>
                ) : (
                  'Generate Summary'
                )}
              </button>
            </form>
          </div>

          {/* History Section */}
          {allArticles.length > 0 && (
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-white/20 p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2">
                <FiBookmark className="text-blue-600" />
                Recent Articles
              </h3>
              <div className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-64 overflow-y-auto">
                {[...allArticles].reverse().map((item, index) => (
                  <div
                    key={`link-${index}`}
                    onClick={() => setArticle(item)}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/80 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-300 hover:shadow-md group"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(item.url);
                      }}
                      className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-blue-100 transition-colors duration-200 flex-shrink-0"
                    >
                      {copied === item.url ? (
                        <FiCheck className="text-green-600 text-sm sm:text-lg" />
                      ) : (
                        <FiCopy className="text-gray-600 group-hover:text-blue-600 text-sm sm:text-lg" />
                      )}
                    </button>
                    <p className="flex-1 text-blue-700 font-medium text-xs sm:text-sm truncate">
                      {item.url}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Section */}
          <div className="w-full">
            {isFetching ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg p-8 sm:p-12 text-center">
                <FiLoader className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 animate-spin mx-auto mb-3 sm:mb-4" />
                <p className="text-gray-600 text-sm sm:text-lg">Analyzing article content...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-red-200 p-6 sm:p-8 text-center">
                <div className="text-red-600 text-lg sm:text-xl font-semibold mb-2">
                  Oops! Something went wrong
                </div>
                <p className="text-red-600/80 text-sm sm:text-base">
                  {error?.data?.error || "We're working to fix this issue"}
                </p>
              </div>
            ) : (
              article.summary && (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl">
                      <FiLink className="text-white text-sm sm:text-xl" />
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                      Article <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Summary</span>
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                      {article.summary}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;