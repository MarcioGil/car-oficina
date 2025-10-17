import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from 'framer-motion';

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <ReactCompareSlider
          itemOne={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage
                src={beforeImage}
                alt="Antes"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                ANTES
              </div>
            </div>
          }
          itemTwo={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage
                src={afterImage}
                alt="Depois"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                DEPOIS
              </div>
            </div>
          }
          style={{
            height: '500px',
          }}
          className="cursor-ew-resize"
        />
      </div>
      
      {(title || description) && (
        <div className="mt-6 text-center">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-gray-600 text-lg">{description}</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default BeforeAfterSlider;
