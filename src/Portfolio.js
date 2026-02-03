import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
// I verified 'ExternalLink' is included in this list:
import { Github, Linkedin, Mail, ExternalLink, Database, LineChart, Brain, Code, Workflow, Sparkles, Target, Globe2, X } from 'lucide-react';

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// Helper Components
const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ company, feedback, achievement }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h4 className="font-semibold text-blue-600 mb-2">{company}</h4>
      <p className="text-gray-600 mb-4">{feedback}</p>
      <div className="flex items-center">
        <div className="h-1 w-8 bg-blue-600 mr-3"></div>
        <p className="text-sm font-medium text-gray-900">{achievement}</p>
      </div>
    </div>
  );
};

// Helper Components
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
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      {image && (
          <div className="mb-6 overflow-hidden rounded-lg bg-white p-4">
            <div 
              className="border border-gray-100 rounded-lg shadow-sm cursor-pointer"
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
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {imageAlt}
              </p>
            )}
          </div>
        )}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Vatsal Raicha</h1>
            <div className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Data Scientist & ML Engineer</h1>
            <p className="text-xl text-gray-600 mb-8">Transforming data into actionable insights and building intelligent solutions</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/vatsalraicha" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/vatsalraicha" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <SkillCard 
              icon={<Database size={24} />}
              title="Data Analysis"
              description="Expert in Python, SQL, and statistical analysis for deriving meaningful insights from complex datasets"
            />
            <SkillCard 
              icon={<LineChart size={24} />}
              title="Data Visualization"
              description="Creating compelling visualizations using matplotlib, seaborn, and interactive dashboards"
            />
            <SkillCard 
              icon={<Brain size={24} />}
              title="Machine Learning"
              description="Implementing ML models for classification, regression, and clustering using scikit-learn, PyTorch & TensorFlow"
            />
            <SkillCard 
              icon={<Sparkles size={24} />}
              title="Generative AI"
              description="Experienced in building custom GenAI solutions using LLMs, diffusion models, and vector databases for enterprise applications"
            />
            <SkillCard 
              icon={<Globe2 size={24} />}
              title="Domain Adaptability"
              description="Strong focus on understanding business domains deeply - from Enterprise systems to Publishing to modern Healthcare analytics, enabling the development of innovative and contextual solutions across industries"
            />
            <SkillCard 
              icon={<Code size={24} />}
              title="Development"
              description="Building data pipelines and ML systems with Python, SQL, and cloud technologies like AWS, Azure"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Workflow size={24} />}
              title="End-to-End Expertise"
              description="From data analysis to production deployment, I handle the complete lifecycle of ML projects. My experience spans from clinical trials to healthcare analytics, ensuring comprehensive solution delivery."
            />
            <ValueCard
              icon={<Sparkles size={24} />}
              title="Innovation & Adaptability"
              description="Consistently working with cutting-edge technologies like Diffusion Models and GenAI. Quick to adapt and implement new technologies that add value to your projects."
            />
            <ValueCard
              icon={<Target size={24} />}
              title="Business Impact Focus"
              description="Strong track record of delivering solutions that directly impact business outcomes - from optimizing clinical trials to revolutionizing analytics platforms and enhancing customer engagement."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
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

      <section className="bg-gray-50 py-20">
        <div className="max-w-8xl mx-auto px-4">
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Client Success Stories</h3>
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
              <TestimonialCard
                company="Cross-Industry Impact"
                feedback="Consistent track record of delivering complex projects on time and exceeding client expectations across various industries."
                achievement="100% client satisfaction rate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vatsal Labs Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Code size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Beyond Data Science</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            While my professional focus is Data Science, I dedicate my downtime to building useful extensions for Chrome and Firefox. 
            <span className="font-semibold text-gray-900"> Vatsal Labs</span> is the home for these experiments. 
            I believe in keeping tools accessible, so everything I build there is 100% free—and committed to staying that way.
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
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-600 mb-8 text-center">
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
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

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-8xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Vatsal Raicha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
