import React from 'react';
import '../styles/footer.css'
function Footer() {
    return (
        <>
      


<div className="mt-5"></div>

<footer className="text-center text-lg-start foter" style={{backgroundColor:"#232F3E"}}>
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
        <div className="me-5 d-none d-lg-block">
            <span style={{color:"white"}}>Get connected with us on social networks:</span>
        </div>
      
        <div>
            <a href="" className="me-4 link-secondary">
                <i className="oi oi-audio"></i>
            </a>
        </div>
   
    </section>
   
    <section className="">
        <div className="container-fluid mt-5">
     
            <div className="row mt-3">
        
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-left">
            
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3 text-secondary"></i>Land Registry 
                    </h6>
                    <p>
                        Our blockchain-based land registry system ensures secure, transparent, and tamper-proof records of land ownership. By leveraging the immutable nature of blockchain technology, we provide a solution that significantly reduces the risk of fraud and errors in property records. Every transaction is recorded in a decentralized ledger, which is accessible to all stakeholders, ensuring transparency and accountability. This innovative approach revolutionizes property management and transactions,
                    </p>
                </div>

         
                <div className="col-md-2"></div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                        Services
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Blockchain Solutions</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Property Management</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Land Verification</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Transaction Security</a>
                    </p>
                </div>
            
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                   
                    <h6 className="text-uppercase fw-bold mb-4">
                        Resources
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Case Studies</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Documentation</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Support</a>
                    </p>
                </div>
                
                <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
                   
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3 text-secondary"></i> Islamabad, E8 04408, Pakistan</p>
                    <p>
                        <i className="fas fa-envelope me-3 text-secondary"></i>
                        support@landregistryblockchain.com
                    </p>
                    <p><i className="fas fa-phone me-3 text-secondary"></i> +92 xxxxxxxxxx</p>
                    <p><i className="fas fa-print me-3 text-secondary"></i> +92 xxxxxxxxxx</p>
                </div>

            </div>
        
        </div>
    </section>

  
    <div className="text-white p-4" style={{backgroundColor :"rgba(0, 0, 0, 0.025)"}}>
        © 2024 Copyright:
        <a className="text-white fw-bold" href="https://landregistryblockchain.com">landregistryblockchain.com</a>
    </div>
 
</footer>


        </>
    );
}

export default Footer;
