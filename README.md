# AI Article Summarizer

> Transform lengthy articles into digestible insights with the power of OpenAI GPT-4

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

**[Live Demo]([https://your-demo-link.com](https://ai-summerizer-by-daksh.netlify.app/)) **

</div>

## 🚀 What is this summerizer??

It is a sleek, modern web application that leverages OpenAI's GPT-4 to transform lengthy articles into clear, concise summaries. Whether you're a researcher, student, or just someone who loves to stay informed, Summize helps you digest information faster than ever.

### ✨ Key Features

- **🎯 AI-Powered Summarization** - Powered by OpenAI GPT-4 for accurate, contextual summaries
- **⚡ Lightning Fast** - Get summaries in seconds, not minutes
- **📏 Customizable Length** - Choose from Brief, Medium, or Detailed summaries
- **📱 Mobile Responsive** - Beautiful experience on all devices
- **💾 Smart History** - Automatically saves your summarized articles
- **🎨 Modern UI** - Glassmorphism design with smooth animations
- **🔓 Open Source** - Free forever, contribute and customize

*Experience the magic of instant article summarization*

## 🛠️ Built With

- **Frontend**: React 18, TailwindCSS, React Icons
- **State Management**: Redux Toolkit with RTK Query
- **AI Integration**: OpenAI GPT-4 API
- **Styling**: Modern Glassmorphism, Responsive Design
- **Storage**: Local Storage for article history

## 🚦 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/summize.git
   cd summize
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   REACT_APP_RAPID_API_ARTICLE_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 🎯 Usage

1. **Enter Article URL** - Paste any article URL into the input field
2. **Choose Summary Length** - Select Brief, Medium, or Detailed
3. **Generate Summary** - Click the button and watch the magic happen!
4. **View History** - Access your previously summarized articles anytime
5. **Copy & Share** - Easily copy URLs or summaries to share

## 📁 Project Structure

```
summize/
├── public/
├── src/
│   ├── components/
│   │   ├── Demo.jsx          # Main summarization component
│   │   ├── Hero.jsx          # Landing page hero section
│   │   └── Footer.jsx        # Footer with credits
│   ├── services/
│   │   └── aiApi.js          # RTK Query API configuration
│   ├── styles/
│   └── App.jsx
├── .env
└── README.md
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_RAPID_API_ARTICLE_KEY` | Your RapidAPI key for article extraction | ✅ |

### API Integration

The app uses RTK Query for efficient API state management:

```javascript
// services/aiApi.js
export const aiApi = createApi({
  reducerPath: 'aiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_RAPID_API_ARTICLE_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=${params.length}`,
    }),
  }),
});
```

## 🎨 Design System

Summize follows a modern design philosophy:

- **Color Palette**: Blue to Indigo gradients with clean whites and grays
- **Typography**: System fonts with clear hierarchy
- **Components**: Glassmorphism cards with backdrop blur
- **Animations**: Subtle transitions and hover effects
- **Responsive**: Mobile-first approach with breakpoints

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow React best practices and hooks patterns
- Use TailwindCSS for styling consistency
- Ensure mobile responsiveness
- Add comments for complex logic
- Test thoroughly before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **OpenAI** for providing the powerful GPT-4 API
- **RapidAPI** for the article extraction service
- **React community** for amazing libraries and tools
- **TailwindCSS** for making styling enjoyable
- **All contributors** who help improve this project

## 📬 Contact & Support

- **Developer**: Daksh
- **GitHub**: [@yourusername](https://github.com/Daksh0269)

---

<div align="center">

**Made by Daksh**

*If you found this project helpful, please give it a ⭐!*

</div>
