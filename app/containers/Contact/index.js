/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Scroll from 'react-scroll';

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

import H1 from 'components/H1';
import messages from './messages';

const durationFn = function (deltaTop) {
  return deltaTop;
};

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <Helmet
          title="Get in touch"
          meta={[
            {
              name: 'description',
              content: 'Contact us page',
            },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <li>
                    <Link
                      activeClass="active"
                      className="test1"
                      to="test1"
                      spy
                      smooth
                      duration={500}
                    >
                      Test 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test2"
                      to="test2"
                      spy
                      smooth
                      duration={500}
                    >
                      Test 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test3"
                      to="test3"
                      spy
                      smooth
                      duration={500}
                    >
                      Test 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test4"
                      to="test4"
                      spy
                      smooth
                      duration={500}
                    >
                      Test 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test5"
                      to="test5"
                      spy
                      smooth
                      duration={500}
                      delay={1000}
                    >
                      Test 5 ( delay )
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test6"
                      to="anchor"
                      spy
                      smooth
                      duration={500}
                    >
                      Test 6 (anchor)
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test7"
                      to="test7"
                      spy
                      smooth
                      duration={durationFn}
                    >
                      Test 7 (duration and container)
                    </Link>
                  </li>
                  <li>
                    {' '}<a onClick={() => scroll.scrollTo(100)}>
                      Scroll To 100!
                    </a>
                  </li>
                  <li>
                    {' '}<a onClick={() => scroll.scrollToBottom()}>
                      Scroll To Bottom
                    </a>
                  </li>
                  <li>
                    {' '}<a onClick={() => scroll.scrollMore(500)}>
                      Scroll 500 More!
                    </a>
                  </li>
                  <li>
                    {' '}<a
                      onClick={() => scroll.scrollMore(1000, { delay: 1500 })}
                    >
                      Scroll 1000 More! ( delay ){' '}
                    </a>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test8"
                      to="same"
                      spy
                      smooth
                      duration={500}
                    >
                      Same target
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test9"
                      to="same"
                      spy
                      smooth
                      duration={500}
                    >
                      Same target
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Element name="test1" className="element">
            test 1
          </Element>

          <Element name="test2" className="element">
            test 2
          </Element>

          <Element name="test3" className="element">
            test 3
          </Element>

          <Element name="test4" className="element">
            test 4
          </Element>

          <Element name="test5" className="element">
            test 5
          </Element>

          <div id="anchor" className="element">
            test 6 (anchor)
          </div>

          <Link
            activeClass="active"
            to="firstInsideContainer"
            spy
            smooth
            duration={250}
            containerId="containerElement"
            style={{ display: 'inline-block', margin: '20px' }}
          >
            Go to first element inside container
          </Link>

          <Link
            activeClass="active"
            to="secondInsideContainer"
            spy
            smooth
            duration={250}
            containerId="containerElement"
            style={{ display: 'inline-block', margin: '20px' }}
          >
            Go to second element inside container
          </Link>
          <Element
            name="test7"
            className="element"
            id="containerElement"
            style={{
              position: 'relative',
              height: '200px',
              overflow: 'scroll',
              marginBottom: '100px',
            }}
          >
            test 7 (duration and container)
            <Element
              name="firstInsideContainer"
              style={{
                marginBottom: '200px',
              }}
            >
              first element inside container
            </Element>
            <Element
              name="secondInsideContainer"
              style={{
                marginBottom: '200px',
              }}
            >
              second element inside container
            </Element>
          </Element>

          <Element id="same" className="element">
            Two links point to this
          </Element>

          <a onClick={this.scrollToTop}>To the top!</a>
        </div>
      </div>
    );
  }
}