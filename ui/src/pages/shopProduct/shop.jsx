import React from 'react';
import { Container,Row,Col } from "react-bootstrap";
import Footer from '../../components/footer/footer';
import Header from "../../components/Header/Header";
import SideNav from '../../components/sideNav/sidenav';
import './shop.css';
import product_1 from '../../images/products/products9.jpg';
import product_2 from '../../images/products/products10.jpg';
import product_3 from '../../images/products/products11.jpg';
import product_4 from '../../images/products/products12.jpg';
import product_5 from '../../images/products/products14.jpg';
import product_6 from '../../images/products/products15.jpg';
import product_7 from '../../images/products/products16.jpg';
import product_8 from '../../images/products/products17.jpg';

const Shop = () => {
  return(
  <>
  <header>
    <Header />
  </header>
  <Row>
    <Col lg={4}><SideNav/></Col>
    <Col className="container first-con">
      <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="single-products-box">
              <div className="image">
                  <a href="products-details.html" className="d-block">
                      <img src={product_1} alt="products-image" />
                  </a>
              </div>
              <div className="content">
                  <h3><a href="products-details.html">Pet brash</a></h3>
                  <div className="price">
                      <span className="new-price">$35.00</span>
                  </div>
              </div>
          </div>
      </div>
    </Col>
    <Col className="container first-con">
      <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="single-products-box">
              <div class="image">
                  <a href="products-details.html" class="d-block">
                      <img src={product_2} alt="products-image" />
                  </a>
              </div>
              <div class="content">
                  <h3><a href="products-details.html">Pet brash</a></h3>
                  <div class="price">
                      <span class="new-price">$35.00</span>
                  </div>
              </div>
          </div>
      </div>
    </Col>
</Row>
<Row>
  <Col className="container none"></Col>
  <Col className="container">
    
    <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="single-products-box">
            <div className="image">
                <a href="products-details.html" className="d-block">
                    <img src={product_3} alt="products-image" />
                </a>
            </div>
            <div className="content">
                <h3><a href="products-details.html">Pet brash</a></h3>
                <div className="price">
                    <span className="new-price">$35.00</span>
                </div>
            </div>
        </div>
    </div>
  </Col>
  <Col className="container">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="single-products-box">
            <div class="image">
                <a href="products-details.html" class="d-block">
                    <img src={product_4} alt="products-image" />
                </a>
            </div>
            <div class="content">
                <h3><a href="products-details.html">Pet brash</a></h3>
                <div class="price">
                    <span class="new-price">$35.00</span>
                </div>
            </div>
        </div>
    </div>
  </Col>
</Row>
<Row>
  <Col className="container none"></Col>
  <Col className="container">
    
    <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="single-products-box">
            <div className="image">
                <a href="products-details.html" className="d-block">
                    <img src={product_5} alt="products-image" />
                </a>
            </div>
            <div className="content">
                <h3><a href="products-details.html">Pet brash</a></h3>
                <div className="price">
                    <span className="new-price">$35.00</span>
                </div>
            </div>
        </div>
    </div>
  </Col>
  <Col className="container">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="single-products-box">
            <div class="image">
                <a href="products-details.html" class="d-block">
                    <img src={product_6} alt="products-image" />
                </a>
            </div>
            <div class="content">
                <h3><a href="products-details.html">Pet brash</a></h3>
                <div class="price">
                    <span class="new-price">$35.00</span>
                </div>
            </div>
        </div>
    </div>
  </Col>
</Row>
<Row>
  <Col className="container none"></Col>
  <Col className="container">
    
    <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="single-products-box">
            <div className="image">
                <a href="products-details.html" className="d-block">
                    <img src={product_7} alt="products-image" />
                </a>
            </div>
            <div className="content">
                <h3><a href="products-details.html">Pet brash</a></h3>
                <div className="price">
                    <span className="new-price">$35.00</span>
                </div>
            </div>
        </div>
    </div>
  </Col>
  <Col className="container">
    <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="single-products-box">
            <div class="image">
                <a href="products-details.html" class="d-block">
                    <img src={product_8} alt="products-image" />
                </a>
            </div>
            <div class="content">
                <h3><a href="products-details.html">Pet brash</a></h3>
                <div class="price">
                    <span class="new-price">$35.00</span>
                </div>
            </div>
        </div>
    </div>
  </Col>
</Row>
<Row>
  {/* <Col className="container none"></Col> */}
  <Col className="container">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="pagination-area">
            <div class="nav-links">
                <a href="shop-left-sidebar.html" class="previous page-numbers" title="Next Page">&lt;</a>
                <span class="page-numbers current">1</span>
                <a href="shop-left-sidebar.html" class="page-numbers">2</a>
                <a href="shop-left-sidebar.html" class="page-numbers">3</a>
                <a href="shop-left-sidebar.html" class="next page-numbers" title="Next Page">&gt;</a>
            </div>
        </div>
    </div>
  </Col>
</Row>
<footer>
  <Footer />
</footer>
  </>
  );
}

export default Shop;
