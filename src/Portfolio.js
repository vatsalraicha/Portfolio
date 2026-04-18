import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, ExternalLink, Database, Brain, Code, Sparkles, X, Sun, Moon } from 'lucide-react';

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm dark:border dark:border-gray-800">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ company, feedback, achievement }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{company}</h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{feedback}</p>
      <div className="flex items-center">
        <div className="h-1 w-8 bg-blue-600 mr-3"></div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{achievement}</p>
      </div>
    </div>
  );
};

const ImageModal = ({ isOpen, image, alt, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-7xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        >
          <X size={24} />
        </button>
        <img
          src={`/images/${image}`}
          alt={alt}
          className="w-full h-auto object-contain max-h-[90vh]"
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, date, image, imageAlt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      {image && (
          <div className="mb-6 overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-4">
            <div
              className="border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={`/images/${image}`}
                alt={imageAlt || title}
                className="w-full h-auto object-contain hover:scale-102 transition-transform duration-200"
                style={{ maxHeight: '400px' }}
              />
            </div>
            {imageAlt && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 italic">
                {imageAlt}
              </p>
            )}
          </div>
        )}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        image={image}
        alt={imageAlt || title}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const Portfolio = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 border-b border-transparent dark:border-gray-800">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/logo192.png"
                alt="Vatsal Raicha logo"
                className="w-9 h-9 rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Vatsal Raicha</h1>
            </a>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="#vatsal-labs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Vatsal Labs</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-8xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">Data Scientist & AI/ML Engineer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Vibe Coder · Hobbyist Developer · Open Source · Loves Technology</p>
            <p className="text-md text-gray-500 dark:text-gray-400 mb-8">Production ML by day. Shipping side projects and contributing to open source by night.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/vatsalraicha" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/vatsalraicha" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-950 py-20 scroll-mt-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Brain size={24} />}
              title="Machine Learning & Data Science"
              description="Python, SQL, PySpark, scikit-learn, XGBoost, PyTorch, TensorFlow, Pandas — classification, regression, clustering, and time-series for production use cases."
            />
            <SkillCard
              icon={<Sparkles size={24} />}
              title="GenAI & NLP"
              description="LangChain, LangGraph, RAG pipelines, Azure OpenAI, FAISS, Milvus, HuggingFace, BioClinicalBERT — enterprise GenAI from prototype to deployment."
            />
            <SkillCard
              icon={<Database size={24} />}
              title="Cloud & Data Platforms"
              description="Azure ML, Databricks, Snowflake, AWS (EC2, S3, SageMaker), PostgreSQL, MongoDB — scalable data pipelines and feature engineering at production scale."
            />
            <SkillCard
              icon={<Code size={24} />}
              title="MLOps & Engineering"
              description="MLflow, Airflow, Docker, Kubernetes, FastAPI, Terraform, GitHub Actions — model versioning, monitoring, and CI/CD for ML systems."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white dark:bg-gray-900 py-20 scroll-mt-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Healthcare Member Rewards Program Prediction"
              description="Developing a predictive model to identify potential rewards program members using healthcare data and smart device metrics. The project involves analyzing timeseries data and implementing clustering to categorize customer engagement levels for targeted outreach."
              tags={['Time Series Analysis', 'Azure ML', 'Databricks', 'Spark', 'SparkML', 'MLFlow', 'Snowflake', 'Clustering', 'Smart Device Data', 'Healthcare Analytics']}
              date="September 2024 - Present"
              image="Rewards.png"
              imageAlt="Above Image is indicative only but similar to the project"
            />
            <ProjectCard
              title="GenAI-Powered Analytics Platform"
              description="Developed an innovative GenAI application using PandasAI and OpenAI to replace traditional PowerBI functionality. The system processes natural language prompts to generate visualizations and insights, with responses stored in a Vector DB (Milvus) for efficient retrieval and reduced API calls."
              tags={['PandasAI', 'OpenAI', 'RAG', 'LangChain', 'Vector DB', 'Milvus', 'GenAI']}
              date="July 2024 - October 2024"
              image="Publishing.png"
              imageAlt="Above Image is indicative only but similar to the project"
            />
            <ProjectCard
              title="Synthetic Clinical Trial Data Generation"
              description="Implemented a custom Diffusion model based on U-Net architecture for generating synthetic clinical trials data. The model, built with PyTorch and deployed on AWS, focuses on survival and adverse events data. Validated synthetic data quality through comprehensive statistical testing including Man-Whitney-U Test, Chi-Square test, and Kaplan-Meier analysis."
              tags={['PyTorch', 'Diffusion Models', 'U-Net', 'AWS', 'Clinical Trials', 'Statistical Analysis']}
              date="July 2024 - August 2024"
              image="Pharma.png"
              imageAlt="Above Image is indicative only but similar to the project"
            />
            <ProjectCard
              title="Early System Anomaly Detection for Mainframe"
              description="Led the development of an advanced ML-powered anomaly detection system analyzing 200+ KPIs. Engineered custom NLP word embeddings for Mainframe systems and implemented sophisticated time series analysis for predictive modeling. Built and deployed end-to-end ML pipelines using Vertex AI, managing model versions and performance monitoring at scale."
              tags={['Python', 'TensorFlow', 'NLP', 'Machine Learning', 'Jenkins', 'Docker', 'Time Series Analysis', 'InfluxDB', 'Grafana']}
              date="August 2015 – April 2022"
              image="AnomalyDetection.png"
              imageAlt="Public Image by BMC Software for the product AMI Ops Insight, Copyright owned by BMC Software Inc."
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="max-w-8xl mx-auto px-4">
          <div className="mt-12 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm dark:border dark:border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">Client Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard
                company="Healthcare Sector"
                feedback="Successfully analyzed complex healthcare data and smart device metrics to drive membership growth through targeted engagement strategies."
                achievement="Improved member conversion rates through data-driven insights"
              />
              <TestimonialCard
                company="Publishing Industry"
                feedback="Revolutionized data analytics approach by implementing an innovative GenAI solution, significantly reducing dependency on traditional BI tools."
                achievement="Streamlined analytics processes with AI automation"
              />
              <TestimonialCard
                company="Pharmaceutical Industry"
                feedback="Delivered high-quality synthetic data generation solution for clinical trials, enabling faster and more cost-effective research processes."
                achievement="Accelerated clinical trial data generation while maintaining statistical validity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vatsal Labs Section */}
      <section id="vatsal-labs" className="bg-white dark:bg-gray-900 py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mb-6">
            <Code size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Beyond Data Science</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            While my professional focus is Data Science, my downtime goes into shipping software I actually want to use — native macOS apps like
            <span className="font-semibold text-gray-900 dark:text-gray-100"> ArcTerm</span> (a modern terminal with built-in AI) and
            <span className="font-semibold text-gray-900 dark:text-gray-100"> SnapIt</span> (a menu-bar screenshot tool with scrolling capture, OCR, and 13 annotation tools), alongside browser extensions for Chrome, Firefox, and Edge.
            <span className="font-semibold text-gray-900 dark:text-gray-100"> Vatsal Labs</span> is the home for all of it. I believe in keeping tools accessible, so everything I build there is 100% free — and committed to staying that way.
          </p>
          <a
            href="https://www.vatsallabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            <ExternalLink className="mr-2" size={20} />
            Visit Vatsal Labs
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-950 py-20 scroll-mt-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const templateParams = {
                  from_name: e.target.name.value,
                  from_email: e.target.email.value,
                  message: e.target.message.value
                };

                emailjs.send(
                  'service_ckz6p9c',
                  'template_tku2qfe',
                  templateParams
                )
                .then((response) => {
                  alert('Message sent successfully!');
                  e.target.reset();
                })
                .catch((error) => {
                  console.error('Failed to send message:', error);
                  alert('Failed to send message. Please try again.');
                });
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
