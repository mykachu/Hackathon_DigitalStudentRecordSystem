import 'antd/dist/antd.css';
import React from 'react';

class ReportPage extends React.Component {
    render(){
        return (
            <div class="contact-items-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="form-request-wrapper">
                            <div class="h2 getintouch">MAKE A REQUEST</div>
                            <div title="Page 1">
                                <div>
                                    <div>
                                        <h5 >*Gửi yêu cầu liên quan đến dịch vụ </h5>
                                    </div>
                                </div>
                            </div>
                            <form id="contactPageForm" name="contactPageForm" method="post" action="/Request/SubmitRequest" enctype="multipart/form-data" class="deactivate-css">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12" >
    
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <label data-input="category" for="sltCategoryId" class="">Request topic (loại yêu cầu) <span class="required">*</span></label>
                                                <select class="form-control" name="categoryId" id="sltCategoryId" required="">
                                                    <option value="">-- Choose an request topic (Chọn loại yêu cầu) --</option>
                                                        <option value="1">Internet/Wifi</option>
                                                        <option value="2">Blackboard/Turnitin</option>
                                                        <option value="3">Email/MS Office acc</option>
                                                        <option value="4">Thiết bị</option>
                                                        <option value="5">Đăng tin lên IU Web</option>
                                                        <option value="6">Vấn đề khác</option>
                                                </select>
                                                <span  id="warning-category"></span>
                                            </div>
                                        </div>
    
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <label for="txtSenderName">Name(tên)*<span class="required">*</span></label>
                                                <input type="text" name="senderName" id="txtSenderName" placeholder="Name (Tên, MSSV - nếu bạn là sinh viên)*" class="form-control" required="" />
                                                <span  id="warning-senderName"></span>
                                            </div>
                                        </div>
    
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <label for="txtEmail">Email <span class="required">*</span></label>
                                                <input type="text" name="email" id="txtEmail" value="" class="form-control" placeholder="Email (các email cách nhau bằng dấu ',')*" required="" />
                                                <span  id="warning-email"></span>
                                            </div>
                                        </div>
    
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <label for="txtPhone">Số điện thoại</label>
                                                <input type="text" name="phone" id="txtPhone" value="" class="form-control" placeholder="Phone (Số điện thoại)" required="" />
                                                <span  id="warning-phone"></span>
                                            </div>
                                        </div>
    
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <label for="txtPlace">Place<span class="required">*</span></label>
                                                <input type="text" name="place" id="txtPlace" value="" placeholder="Place (Vị trí gửi yêu cầu)*" class="form-control" required="" />
                                                <span  id="warning-place"></span>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6 col-sm-12">
    
    
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <label for="txtDetail">Your Request(Yêu cầu của bạn) <span class="required">*</span></label>
                                                <textarea name="detail" id="txtDetail" placeholder="Your Request (Yêu cầu)*" rows="2" class="form-control" required=""></textarea>
                                                <span  id="warning-detail"></span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <input type="file" id="files" name="files" multiple="" class="" />
                                                <h6 >Upload file format: jpg, jpeg, png or docx, and not greater than 2MB</h6>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <p><span>Code</span> What is 1 + 3?:</p>
                                                <input type="text" name="Captcha" id="txtCaptcha" value="" class="form-control" data-input="captcha" placeholder="Answer (Trả lời câu hỏi bảo mật)*" required="" />
                                                <span  id="warning-captcha"></span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12">
                                            <div class="submit_wrap">
                                                <button type="submit" id="btnSubmit">Send request / Gửi yêu cầu</button>
                                            </div>
                                            <p class="contact-note text-center">Chúng tôi sẽ phản hồi yêu cầu của bạn sớm nhất!</p>
                                        </div>
                                    </div>
                                   
                                </div>   
                            </form>
    
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ReportPage;