import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Class in Pictures 🖼️',
    paragraph: 'A picture is worth thousand words, so here are some pictures of the experiences in our class! 📸'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  We show unparalelled commitment
                  </div>
                <h3 className="mt-0 mb-12">
                  Serious Dedication!
                  </h3>
                <p className="m-0">
                  Students of our class like Kylen go to extremes to get their work done. He has not eaten for a 4 days because of his work towards the project, and he will not stop coding even if it means he has to eat without his hands. He is so immersed in his work that he even takes it to the bathroom! 🧻
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://i.ibb.co/dM86VFQ/20221117-140445.jpg"}
                  alt="Features split 01"
                  width={528}
                  height={396}
                  style={{ "border-radius": "20px", "box-shadow": "0 0 8px 8px",}}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Promoting team-work
                  </div>
                <h3 className="mt-0 mb-12">
                  We work Together!
                  </h3>
                <p className="m-0">
                  We can see Eshan and Neelesh having beautiful interactions with each other. They are working together to make sure that the project is completed on time. They are also having fun while doing so! 🤗
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://i.ibb.co/b5B7Xs9/20221117-140907.jpg"}
                  alt="Features split 02"
                  width={528}
                  height={396}
                  style={{ "border-radius": "20px", "box-shadow": "0 0 8px 8px",}}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  incredible fashion sense
                  </div>
                <h3 className="mt-0 mb-12">
                  The Coolest Kids!
                  </h3>
                <p className="m-0">
                  Because of amazing students like Arjan, our class is more than just code. We have the coolest personalities, fashion sense, and the best jokes in North Park 🤣
                </p>
                <br/>
                <p className="m-0">
                Joke: I don’t like people who take drugs, for example: airport security. ✈️
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://i.ibb.co/kVnSWsK/IMG-20221122-214536-846.jpg"}
                  alt="Features split 03"
                  width={528}
                  height={396}
                  style={{ "border-radius": "20px", "box-shadow": "0 0 8px 8px",}}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;