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
                  src={"https://lh3.googleusercontent.com/02B-wiBTJVeIPBHn_SDVIXFrEQXA2gUw_ouWaYpxSflofOTd-a0SacBOP1t4oAsBNUkoC01elfxLQQTlaZmiTw29j_0os8vVvIew07aXJubc3G3rQov4d3Eg-t0kpv7htl2Yjr65p2aM440mdKoe4Sw6FPPIybwE8hyHxpoq3zglUHE3_RA9nZ3vq6Xyw7Nir40zd7UNVHxGGEt-yYk6M_R4uWGBEm7FsP1zqrzzKcVfB8ZjCX-hE0X40kLs8wwSG5DdZuc9KjgroIKItCjAZFD4zpjEezrxvOB0OE2t2bne9IvOihtp3iAQP93GfCd4qKjq8zIELUYi_P6lEX2Q2Hc_rN-kY5YdyZDMHCk2KIryS_4nimx7FVX0hVNrpFOtcKu5EobJ3OoRv97CVzEaCuP7ZPGTDSfbzhX8qoiWmGQQQtW-q4gOpU6aJXvIcRkxo_5B9KX7WyQ9ZP5CZ23F8IMEoTXg4XK9oLHWHOJEx0exihEWErSK5JSsxl4B47RMtsmCXcfoXn3W4dDKApSphWtKtj35TMUMo0m6S3u7jRwgaD2Pt5xzho-VcCvklE6vlfdPI8bnrJnY8Zf-vIkz4G_jXDZ5vdcJHWvvErcc86TLEiAD-A05xlbkVYQBJRBRjcdEKkYrjs4mya0XNI2FnsVZhP5H9z-jzgbN-0BMXph5k-Az8Ws6CcQ_vbdgH6VcGkC17XZKTUqezSt8uaRYOmAA9SnrazwBqFGxjGkpJ5PCf5xEGPnk-h_eS6OY8LEh_bwh-IZ6uw0_be62xKIKYnZTe3sptfLFqpBrC0inVvM40LUnpIyoBoqRn2DlhmVkvD6Aq88Sd4rM_A-JoOL4AcpULxGRR7ofmPPghzpNtrb81Cmp3-d687rADIlPfLqZ36eTe6BPAv6eK67NBB0x2n_ZA88J64alBaG2MfmSJO7E8w=w833-h1110-no?authuser=0"}
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
                  src={"https://lh3.googleusercontent.com/PRxZpiARnIsaoAZD7ZThEBjtu5NCUBiKlS-eMoacr0uTg6wu_1KZGzaE-o3QpxWKUk0gbq29FfZHUBx2xA7MGm47aVrRSzcklXosS_EjYnIjxQkN6B9ft-3ISR3wjKarbNDFGwwq1XBykuH-cxsUnesSWQhfyUHd-WkmIabCfJNAo3C1MAukGEaijbTGZ_EAueVORPCXZZq2ud7gkMKQBdGV8ump2JlYBmsu9cYQEZwyGCn0kK9x4MB0w3yOXgH_nCreWjAOncSKakoA1_nRhHJ_toD3SySqnAm4PZAquQWE6u4_DqDXECVsXiNSW2SDHkjMjNiwIUtHlU0vOmhCRBNVwXfJDrtBUiCEbJcPaLWqrboSkZ3gvaOm86gba8Vdno0seUKsfDHSJQQXR-GAbLpPfJPS9OwyXJMDJdsOtZxD9vVVWYiiwV9bkMIEokm6Br1VncgXKqJn0FVrOd0TP9DFktu-GqlLjg3AIHBd6Cj3FxspYhv5R_ckQuC9qPjOCCv7UiBHL_bgN7m5gvl83uPu3vFhhj6NYVYDTnWRt9P59VeavBvXZ7a62US8afQvcSRCsympbLEpl6eg7RbSoLhhZz5hTu6G9m0djWus96kzlLsop5jaaYdASmRdUYzEOYEddJvOvxdkj_uUKiAr8ccgeCUoe_alinViAGTkBMSI4VILE0_S-GCQBjSvIUUT5m4fLSFHM1DJ1vtwpNcn8cpw-EJJ7-Zo69Ebb4GH3T2eaCgiBCK3PH1Nw-8NcazO8FGZV8J0HdEg4B6LJ4kJ1Gl9E4HTSlb4Do3bxvWsgDUrvKjN2NrMk3edpQ5ieA8CzJeCbVNA_9pbVdYiCQPE83yfYZQbcY9IkE8G0gnNBSHNKLJuZvMh2eFoTGyeYMAkgWLLWqQNH3AwIn7eY3965Zm7-xKVqc3D9qUr9JqYbhcHTg=w1480-h1110-no?authuser=0"}
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
                  src={"https://lh3.googleusercontent.com/kNurVQN7wJCa5sAU0AULg2I5UPNeYsmqTK3sFAB0niCXnfFdyv2QWgJPsaDUiXWk9rhYWdp4fN5-bASjGNAkihry59lFFTHAamgqWxOwzQ8Zs8tYiAyM0l76NLi-Gccs689BAbhvMY2cZftM5GIWmxtrGolMzzGxcsXibh-CF9K80lhmXSh6c7CScdWo3f741ns-t8d0Y1kRJFx-9Kw1b_FZO9gfEF54W5vaPxarYwM987edIcOmSR4BY-Sz3qeQI4VCechlszNLvRTgbxRpEYhsrNi1WoaIoeh8YxjfsMlxD0ib4y13P042hlqXafifdJLXi8tONLtrmLWifx5On2Kfyid7ETefuYFz2pQZIB8iNhFpb2ALL4KgA-rqrQxIU7BAmcfPEQBOx-gnS1rKqz_oa1nJLBLb53f1QyxeO8WGtdnr4rS0k7J43FebOx3HIBqycD7xfDcg_25YcTEOcD7BnGBOdKnG_2uahZqNh_5-cIDsIfizTY6D3IhxGTkqUHTRc2VovDpXRkPW7rf--RZKXP9tKiHeoo3omw-gnMUW7_XMsqVfbAXosaUpX3nW99MaSROU4BLutSdKMqvOZCbEOKgZnB_MgoP6xF6pbwV7yoRErqsnWTk35yBTWDdPV6FBtJQr20EcIM-D2HyuFNLPuwayjehH-uaqmhQcYmqTuzDz7beymoxLw4pc83YQ3-OAW9rC-4hCFQsLbrITncvYOsnQslGp7FaiWpoebL_ib2lhLcS_cLM-UoFC4R3rmsBa0gFAygNqQijoByNEu9Qs5mhZfzCrKMXyDlmps4nHqzSxuzdcYKrELBzYHfPLVAjaDose8r-v48Qm2mqLtm3Pvza9XrhTySdhZxlmQ-e7NP14Jls3Mm7C4MV1FiI_i_vPuJfmuw2GBtB5-l6frZtMB6KOzfMsoQDvCvGZy6as-Q=w600-h1099-no?authuser=0"}
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