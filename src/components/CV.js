import React from 'react';

const CV = () => {
  return (
    <section className="min-h-screen bg-[#F4F4F4] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#2E2E2E" }}>
          My CV
        </h2>
        <div className="flex justify-center">
          <iframe
            src={process.env.PUBLIC_URL + '/Nguyen_Huu_Hoang_Minh_CV.pdf'}
            title="My CV"
            className="w-full md:w-3/4 lg:w-2/3 h-screen"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CV;