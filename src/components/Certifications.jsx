import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CertificationCard = ({ pdf, name }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // Create a URL for the PDF blob
    const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
    setPdfUrl(url);
    
    // Cleanup URL on unmount
    return () => URL.revokeObjectURL(url);
  }, [pdf]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-72 h-96 mx-4">
      <div className="relative w-full h-full bg-tertiary rounded-2xl p-4 overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="w-full h-[75%] overflow-hidden rounded-xl bg-white">
            {pdfUrl && (
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                className="w-full h-full"
              >
                <Page
                  pageNumber={pageNumber}
                  width={280}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="pdf-page"
                />
              </Document>
            )}
          </div>
          
          <div className="w-full mt-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-medium mb-2">
              {name}
            </h3>
            
            <button 
              onClick={() => window.open(pdfUrl, '_blank')}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <>
      <div className="border-t border-gray-700 mb-8"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>
          My Achievements
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-12 overflow-hidden">
        <motion.div 
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "linear"
          }}
        >
          {[...certifications, ...certifications].map((cert, index) => (
            <CertificationCard
              key={`certification-${index}`}
              {...cert}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Certifications;