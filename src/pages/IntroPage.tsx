// IntroPage.js
import { Element as ScrollElement } from 'react-scroll';
import IntroTwo from './content/IntroTwo';
import IntroOne from './content/IntroOne';

const IntroPage = ({ handlePageChange: _ }: { handlePageChange?: Function }) => {
  // const header = (
  //   <ScrollableTitle
  //     img={IntroCards.Header.img}
  //     altText={IntroCards.Header.altText}
  //     title={IntroCards.Header.title}
  //   />
  // );
  const sections = [<IntroOne />, <IntroTwo />];
  // const [activeSection, setActiveSection] = useState(0);

  // const handleSectionClick = (index) => {
  //   setActiveSection(index);
  //   scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  // };

  return (
    <>
      <div className='app flex'>
        <div className='content flex-1'>
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
};

export default IntroPage;
