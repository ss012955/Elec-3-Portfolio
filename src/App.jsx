import React, { useState } from 'react';
import { ChevronDown, X, ArrowUpRight } from 'lucide-react';
import Marquee from './components/Marquee';
import Carousel from './components/Carousel';
import RansomText from './components/RansomText';

// Import PDFs
import restApiPdf from './assets/pdf/Sicat-RestAPI.pdf?url';
import awsPdf from './assets/pdf/Sicat_SeanRussel_A2.pdf?url';
import dockerPdf from './assets/pdf/Sicat-Study Dockers and Containerization.pdf?url';
import narrativePdf from './assets/pdf/Sicat-Assignment-4.pdf?url';
import kubernetesPdf from './assets/pdf/Sicat-Assignment-5.pdf?url';
import dockerImagePdf from './assets/pdf/Sicat_Villena_DOCKERACTIVITY.pdf?url';

// import images
import restApiImage from './assets/images/restapi.png';
import awsImage from './assets/images/aws.png';
import dockerImage from './assets/images/dockerimage.png';
import kubernetesImage from './assets/images/kubernetes.png';
import narrativeImage from './assets/images/narrative.png';
import docker from './assets/images/docker.png';

const assignments = [
  {
    id: 1,
    title: "REST API Architecture",
    description: "Understanding RESTful API architecture, endpoints, and HTTP methods. A deep dive into backend communication.",
    tags: ["API", "Backend", "HTTP"],
    color: "#f472b6",
    image: restApiImage,
    pdfLink: restApiPdf
  },
  {
    id: 2,
    title: "AWS Cloud Guide",
    description: "How-To document guide based on the AWS Tutorial video for Beginners. Setting up EC2 and S3 buckets.",
    tags: ["AWS", "Cloud", "DevOps"],
    color: "#facc15",
    image: awsImage,
    pdfLink: awsPdf
  },
  {
    id: 3,
    title: "Docker Image Lab",
    description: "Hands-on Docker image lab activity ",
    tags: ["Docker", "Images", "Lab"],
    color: "#c084fc",
    image: dockerImage,
    pdfLink: dockerImagePdf
  },
  {
    id: 4,
    title: "Narrative Report",
    description: "Comprehensive narrative report on course learnings and experiences throughout the semester.",
    tags: ["Report", "Reflection", "Writing"],
    color: "#a3e635",
    image: narrativeImage,
    pdfLink: narrativePdf
  },
  {
    id: 5,
    title: "Kubernetes Lab",
    description: "Hands-on Kubernetes home lab activity and deployment exercises. Orchestrating containers at scale.",
    tags: ["K8s", "Orchestration", "Cluster"],
    color: "#c084fc",
    image: kubernetesImage,
    pdfLink: kubernetesPdf
  },
  {
    id: 6,
    title: "Docker Containers",
    description: "Study of Docker containers and containerization technology.",
    tags: ["Docker", "Containers", "Virtualization"],
    color: "#00f0ff",
    image: docker,
    pdfLink: dockerPdf
   
  }
];

function App() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);

  const scrollToCarousel = () => {
    const carouselSection = document.getElementById('carousel-section');
    carouselSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Marquee text="FINALS 2025" />

      {/* Hero Section - Full Screen */}
      <header className="h-[calc(100vh-60px)] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-[10rem] font-display uppercase tracking-tighter leading-none mb-4 mix-blend-difference hover:scale-105 transition-transform duration-500 cursor-default">
            Elective 3<br />Portfolio
          </h1>
          <div className="mt-8 transform -rotate-2">
            <RansomText text="A COLLECTION OF WORKS" className="text-2xl md:text-4xl" />
          </div>
          <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tighter leading-none m-12">
            Sean Russel F. Sicat
          </h2>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[100px] -z-10 animate-pulse"></div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToCarousel}
          className="absolute bottom-10 animate-bounce cursor-pointer hover:text-[#00f0ff] transition-colors"
        >
          <ChevronDown size={48} />
        </button>
      </header>

      {/* Carousel Section */}
      <main id="carousel-section" className="min-h-screen flex flex-col justify-center py-20 relative">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl font-display uppercase tracking-wider mb-4">The Assignments</h2>
          <p className="text-[#666] max-w-xl mx-auto">Click on any card to view the details and access the documentation.</p>
        </div>

        {/* Carousel with 3 cards visible */}
        <Carousel
          slides={assignments.map((assignment) => (
            <div className="flex gap-6 transition-all duration-300 ease-out" key={assignment.id}>
              {/* Card */}
              <div
                onClick={() => setSelectedAssignment(selectedAssignment?.id === assignment.id ? null : assignment)}
                className="relative w-80 aspect-square bg-[#111] overflow-hidden rounded-xl border border-[#333] transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-2xl flex-shrink-0"
              >
                {/* Assignment Image */}
                <img
                  src={assignment.image}
                  alt={assignment.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Inline Detail Panel - Shifts cards instead of overlaying */}
              {selectedAssignment?.id === assignment.id && (
                <div className="w-80 aspect-square bg-[#0a0a0a] border border-[#333] rounded-xl p-6 shadow-2xl animate-slide-in-left overflow-y-auto flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAssignment(null);
                    }}
                    className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white transition-colors z-10"
                  >
                    <X size={18} />
                  </button>

                  <div className="mb-2">
                    <span className="text-[#666] font-mono uppercase tracking-widest text-xs">Overview</span>
                  </div>

                  <h2 className="text-2xl font-display mb-3 text-white uppercase tracking-tight leading-none">
                    {assignment.title}
                  </h2>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    {assignment.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold px-2 py-1 bg-[#1a1a1a] text-[#999] rounded uppercase tracking-wider border border-[#333]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#bbb] text-sm leading-relaxed mb-6 font-light border-l-2 border-[#333] pl-4">
                    {assignment.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPdf(assignment.pdfLink);
                      setPdfModalOpen(true);
                    }}
                    className="btn-primary self-start group inline-flex text-sm cursor-pointer"
                  >
                    View Document
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
          options={{
            loop: true,
            align: 'start',
            slidesToScroll: 1
          }}
        />
      </main>

      <footer className="text-center py-8 text-[#555] font-mono text-sm border-t border-[#222]">
        <p>© 2025 ELECTIVE 3.</p>
      </footer>

      {/* PDF Viewer Modal */}
      {pdfModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setPdfModalOpen(false)}
          ></div>
          <div className="relative w-full h-full max-w-6xl bg-[#111] rounded-xl overflow-hidden border border-[#333] shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center p-4 border-b border-[#333] bg-[#0a0a0a]">
              <h3 className="text-white font-display uppercase tracking-wider">Document Viewer</h3>
              <button
                onClick={() => setPdfModalOpen(false)}
                className="text-white hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 bg-[#222] relative overflow-hidden">
              {currentPdf ? (
                <iframe
                  src={currentPdf}
                  className="w-full h-full border-0"
                  title="PDF Viewer"
                  style={{ minHeight: '600px' }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white">
                  <p>No PDF selected</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
