const nodemailer = require('nodemailer');
// function addHTML(url) {
//     return (
//         `<html><body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;text-align-center;">
//       <h1 style="color: #000AFF;">Welcome to LinkBowl</h1><br/>
//       <h2 style="color:#000AFF;">Verify Your Email By Click Below Button</h2><br/>
//       <a href="${url}"><button style="background-color: #E87A7A;color: white;border: none;padding: 15px 30px;border-radius: 10px;font-weight: bold;">Verify Email</button></a><br/>
//       <h4 style="color: #000AFF;">Thanks from Team LinkBowl</h4>
//   </body></html>`
//     )
// }
function addHTML(url){
    return(
        `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
        <title>Verify Email | LinkBowl</title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          #outlook a {
            padding: 0;
          }
      
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
      
          table,
          td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
      
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
      
          p {
            display: block;
            margin: 13px 0;
          }
        </style>
        <!--[if mso]>
              <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
        <!--[if lte mso 11]>
              <style type="text/css">
                .mj-outlook-group-fix { width:100% !important; }
              </style>
              <![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&amp;display=swap);
        </style>
        <!--<![endif]-->
        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }
          }
        </style>
        <style type="text/css">
          @media only screen and (max-width:480px) {
            table.mj-full-width-mobile {
              width: 100% !important;
            }
      
            td.mj-full-width-mobile {
              width: auto !important;
            }
          }
        </style>
        <style type="text/css">
          a,
          span,
          td,
          th {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
        </style>
      </head>
      
      <body style="background-color:#f3f3f5;">
        <div style="background-color:#f3f3f5;">
          <!--[if mso | IE]>
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
          <div style="margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     class="" style="vertical-align:top;width:600px;"
                  >
                <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td style="font-size:0px;word-break:break-word;">
                            <!--[if mso | IE]>
          
              <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">
            
          <![endif]-->
                            <div style="height:20px;">   </div>
                            <!--[if mso | IE]>
          
              </td></tr></table>
            
          <![endif]-->
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            
              <v:rect  style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
              <v:fill  origin="0.5, 0" position="0.5, 0" src="https://www.transparenttextures.com/patterns/brushed-alum.png" color="#FFFFFF" type="tile" />
              <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
          <div style="background:#FFFFFF top center / auto repeat;margin:0px auto;border-radius:4px 4px 0 0;max-width:600px;">
            <div style="line-height:0;font-size:0;">
              <table align="center"  border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF  top center / auto repeat;width:100%;border-radius:4px 4px 0 0;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                      <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     class="" style="vertical-align:top;width:600px;"
                  >
                <![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td style="vertical-align:top;padding:20px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                  <tbody><tr>
                                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:150px;">
                                              <img height="auto" src="https://ik.imagekit.io/qmffpfng5/lb-png.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675184360104" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--[if mso | IE]>
              </v:textbox>
            </v:rect>
          
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0 0 4px 4px;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0 0 4px 4px;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 10px;text-align:center;">
                    <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     class="" style="vertical-align:top;width:580px;"
                  >
                <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-size:20px;font-weight:700;line-height:30px;text-align:left;color:#000AFF;">
                              <h1 style="font-family: 'Segoe UI', sans-serif;margin: 0; font-size: 32px; line-height: 50px; font-weight: 700;"> Welcome to LinkBowl</h1>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family: 'Segoe UI', sans-serif;font-size:20px;font-weight:500;line-height:30px;text-align:left;color:#000000;">Please click the button below to complete your registration Once you have completed the process, you can start using our service.</div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                              <tbody><tr>
                                <td align="center" bgcolor="#FFFFFF" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#FFFFFF;" valign="middle">
                                  <a href="${url}"style="display: inline-block; background: #E87A7A; color: white; font-family: 'Segoe UI', sans-serif; font-size: 18px; font-weight: normal; line-height: 30px; margin:0; text-decoration: none; text-transform: none; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 5px;font-weight:700" target="_blank"> Complete Your Registration</a>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
          <div style="background:#E87A7A;background-color:#E87A7A;margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#E87A7A;background-color:#E87A7A;width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     class="" style="vertical-align:top;width:600px;"
                  >
                <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-align:left;color:#fff;">
                              <p style="margin: 0;color:"#fff"">Please Ignore this mail, If you not request our Service</p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
          <div style="background:#000AFF;background-color:#000AFF;margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000AFF;background-color:#000AFF;width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     class="" style="vertical-align:top;width:600px;"
                  >
                <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                              <p style="margin: 0;"> Department of Computer Application,ANJAC, Sivakasi-626124 </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                              <p style="margin: 0;"> Copyright © 2030 LinkBowl<br /> All rights reserved.</p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!--[if mso | IE]>
                  </td>
                
                  <td
                     class="" style="vertical-align:top;width:600px;"
                  >
                <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <!--[if mso | IE]>
            <table
               align="left" border="0" cellpadding="0" cellspacing="0" role="presentation"
            >
              <tr>
           
                  
                    <td>
                  <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                              <tbody><tr>
                                <td style="padding:4px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                                    <tbody><tr>
                                      <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                        <a href="#" target="_blank" style="color: #00AD55;">
                                          <img alt="facebook-logo" height="18" src="https://codedmails.com/images/social/white/facebook-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                            <!--[if mso | IE]>
                    </td>
                  
                    <td>
                  <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                              <tbody><tr>
                                <td style="padding:4px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                                    <tbody><tr>
                                      <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                        <a href="#" target="_blank" style="color: #00AD55;">
                                          <img alt="instagram-logo" height="18" src="https://codedmails.com/images/social/white/instagram-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                            <!--[if mso | IE]>
                    </td>
                  
                    <td>
                  <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                              <tbody><tr>
                                <td style="padding:4px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:18px;">
                                    <tbody><tr>
                                      <td style="font-size:0;height:18px;vertical-align:middle;width:18px;">
                                        <a href="#" target="_blank" style="color: #00AD55;">
                                          <img alt="youtube-logo" height="18" src="https://codedmails.com/images/social/white/youtube-logo-transparent-white.png" style="border-radius:3px;display:block;" width="18" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                            <!--[if mso | IE]>
                    </td>
                  
                </tr>
              </table>
            <![endif]-->
                          </td>
                        </tr>
            
                        </table>
                      <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
          <div style="margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     class="" style="vertical-align:top;width:600px;"
                  >
                <![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td style="font-size:0px;word-break:break-word;">
                            <!--[if mso | IE]>
          
              <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="1" style="vertical-align:top;height:1px;">
            
          <![endif]-->
                            <div style="height:1px;">   </div>
                            <!--[if mso | IE]>
          
              </td>
      </tr></table>
            
          <![endif]-->
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            <![endif]-->
        </div>
      
      
      </body></html>`
    )
}
const sendEmail = async options => {
    var transporter = nodemailer.createTransport({
        name:"LinkBowl",
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS
        }
    });

    var mailOptions = {
        from: "LinkBowl",
        to: options.emailId,
        subject: 'Verify Your Email Address | LinkBowl',
        html: addHTML(options.verifyUrl)
    };

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;