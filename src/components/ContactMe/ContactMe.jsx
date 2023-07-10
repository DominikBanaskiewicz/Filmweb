import css from './ConstactMe.module.css';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start('visible');
    }
    console.log(isInView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div ref={ref} className={css.ContactMe__container}>
      <motion.div
        className={css.Contact_Me__motion_container}
        whileInView="onscreen"
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className={css.contact__logo}>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DominikBanaskiewicz"
            >
              <svg
                enableBackground="new 0 0 512 512"
                height="100"
                width="100"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    clipRule="evenodd"
                    d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                    fill="#424bf5"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className={css.contact__logo}>
          <a
            href="https://www.linkedin.com/in/dominik-bana%C5%9Bkiewicz-a97234224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="100"
              width="100"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
            >
              <title />
              <rect
                fill="#424bf5"
                height="412.22"
                rx="55.43"
                width="412.22"
                x="49.89"
                y="49.89"
              />
              <rect
                fill="#fefefe"
                height="158.08"
                width="48.9"
                x="138.56"
                y="216"
              />
              <circle cx="163.01" cy="162.58" fill="#fefefe" r="26.46" />
              <path
                d="M337.6,217.18s-13.6-4.41-34.78-1.41a45.63,45.63,0,0,0-21.23,8.49,35.47,35.47,0,0,0-12.25,16.19V216h-48.9V374.08h48.9V288c0-13.05,7-25.59,18.83-31a31.72,31.72,0,0,1,10.14-2.76s11.14-2.23,20.9,8.76c5.29,6,7.73,13.94,7.73,21.91v89.23h48.9V264.9C378,225,337.6,217.18,337.6,217.18Z"
                fill="#fefefe"
              />
            </svg>
          </a>
        </div>

        <div className={css.contact__logo}>
          <div>
            <a href="mailto:banaskiewiczdominik@gmail.com">
              <svg
                width="100"
                height="100"
                viewBox="0 0 134 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1:194)">
                  <path
                    d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848"
                    fill="#34A853"
                  />
                  <path
                    d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727"
                    fill="#FBBC04"
                  />
                  <path
                    d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576"
                    fill="#EA4335"
                  />
                  <path
                    d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364"
                    fill="#C5221F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1:194">
                    <rect width="133.333" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
