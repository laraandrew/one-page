import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const PDFViewer: React.FC = () => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/lib', // Path to WebViewer's lib folder on your server
        initialDoc: '/Andrew_Lara_Resume.pdf', // The path to your PDF document
      },
      viewer.current as HTMLDivElement
    );
  }, []);

  return (
    <div>
      <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
};

export default PDFViewer;
