import React from 'react';
import './DeparmentList.css';
const DepartmentList = () => {
  return (
    <div>
    
    <div className="wp-block-metropolis-content-block has-light-gray-background-color has-background">
      <div className="wp-block-metropolis-content-block__container">
        <h3 className="wp-block-heading" id="contact-list-2">Solanco Student Services &amp; Special Education Team</h3>
        <h5 className="wp-block-heading has-brown-color has-text-color" id="administration">Members</h5>
        <figure className="wp-block-table is-style-regular">
          <table className="has-fixed-layout">
            <tbody>
              <tr>
                <td><strong>Assistant Superintendent/Homeless Liaison</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:robert_dangler@solancosd.org'}>Dr. Robert J. Dangler</a></td>
                <td>717-786-5609</td>
              </tr>
              <tr>
                <td><strong>Director of Special Education</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:christopher_keeler@solancosd.org'}>Chris Keeler</a></td>
                <td>717-786-5624</td>
              </tr>
              <tr>
                <td><strong>Special Education Consultant</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:michelle_rohrer@solancosd.org'}>Michelle Rohrer</a></td>
                <td>717-786-5624</td>
              </tr>
              <tr>
                <td><strong>Administrative Assistant to Director</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:shanna_hecker@solancosd.org'}>Shanna Hecker</a></td>
                <td>717-786-5624</td>
              </tr>
              <tr>
                <td><strong>Special Education Administrative Assistant</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:sheri_johnson@solancosd.org'}>Sheri Johnson</a></td>
                <td>717-786-5625</td>
              </tr>
              <tr>
                <td><strong>Special Education Administrative Assistant</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:deidre_wagner@solancosd.org'}>Dana Wagner</a></td>
                <td>717-786-5613</td>
              </tr>
              <tr>
                <td><strong>Director of Psychological Services</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:Marc_Riccomini@solancosd.org'}>Marc Riccomini</a></td>
                <td>717-786-5625</td>
              </tr>
              <tr>
                <td><strong>Director of Behavioral Support</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:ashley_edwardsnace@solancosd.org'}>Ashley Edwards-Nace</a></td>
                <td>717-786-5625</td>
              </tr>
              <tr>
                <td><strong>School Psychologist</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:Carol_Graybeal@solancosd.org'}>Carol Graybeal</a></td>
                <td>717-786-5625</td>
              </tr>
              <tr>
                <td><strong>School Psychologist</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:rebecca_conner@solancosd.org'}>Rebecca Conner</a></td>
                <td>717-786-5625</td>
              </tr>
              <tr>
                <td><strong>School Psychologist</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:jenna_carey@solancosd.org'}>Madison King</a></td>
                <td>717-786-5625</td>
              </tr>
              <tr>
                <td><strong>School Social Worker</strong></td>
                <td><a href="#" onClick={() => window.location.href = 'mailto:Avery_Hill@solancosd.org'}>Avery Hill</a></td>
                <td>717-786-8401</td>
              </tr>
            </tbody>
          </table>
        </figure>
      </div>
    </div>


    </div>
  );
};

export default DepartmentList;
