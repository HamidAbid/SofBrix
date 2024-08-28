import React from "react";
import { useState } from "react";
import locationicon from "../../Images/locationicon.png";
import facebook from "../../Images/facebook.png";
import twitter from "../../Images/twitter.png";
import email from "../../Images/email.png";
import linkedin from "../../Images/linkedin.png";


const Contactform = () => {

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    }
    const initialErrors = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    }

    const [IsClassAdded, setIsClassAdded] = useState(false);
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialErrors);
    const [apiError, setApiError] = useState('')
    const [Loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type == 'checkbox') {
            setFormData({
                ...formData, [name]: checked
            })
        }
        else {
            setFormData({ ...formData, [name]: value })
        }

    }

    const SetErrors = (e) => {
        e.preventDefault()
        const { name, validity } = e.target
        console.log(name, validity)
        if (validity.valueMissing) {
            setFormErrors({ ...formErrors, [name]: 'This Feild is required' })
        }
        else if (validity.typeMismatch) {
            setFormErrors({ ...formErrors, [name]: 'Provide the Correct Format' })
        }
        else if (validity.tooShort) {
            setFormErrors({ ...formErrors, [name]: 'Enter 10 digit number' })
        }
        else {
            setFormErrors({ ...formErrors, [name]: '' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
    }

    return (
        <>
            <div className="container">
                <div className="contactForm-Section_1 w-100  row shadow">
                    <div className="col-12 col-md-5 content-left_section bg-lightblue  mb-5 mb-md-0 p-4 p-md-3 rounded d-flex flex-column justify-content-between">
                        <div className="">
                            <p className="Rubik fw-600 fs_26 color-white lh-1 text-white contact-section">Contact Information </p>
                            <p className="Poppins fs_16 color-white  lh-1 text-white">Say something to start a live chat!</p>

                        </div>

                        <div >
                            <div className="d-flex gap-3 align-items-baseline pb-5">
                                <div className="">
                                    <img src={email} className='contact-icon' width="25px" alt="" />
                                </div>
                                <div className="fs_10 fw-400  poppins text-white pb-3">
                                    hello@thealphabridge.com
                                </div>
                            </div>
                            <div className="d-flex gap-3 align-items-baseline">
                                <div className="">
                                    <img src={locationicon} className='contact-icon' width="25px" alt="" />
                                </div>
                                <div className="fs_10 pb-5 lh-1 poppins text-white">
                                    <p>address: 1160 Battery St suite 1111, </p>
                                    <p>San Francisco, CA 94111 </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex pt-5 gap-3">
                            <img onClick={() => window.open('')} src={linkedin} height={52} />
                            <img onClick={() => window.open('', '_blank')} src={facebook} height={52} />
                            <img onClick={() => window.open('', '_blank')} src={twitter} height={52} />
                        </div>
                    </div>
                    <div className="col-12 col-md-7 content-right_section">
                        <div className="row">
                            <form onSubmit={handleSubmit} className={IsClassAdded ? 'was-validated' : ''}>
                                <div className="row">
                                    <div className='col-12'>

                                        {apiError &&
                                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                <strong>Error:</strong> {apiError}
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                        }
                                    </div>
                                    <div className='col-12 col-md-6 mt-3'>
                                        <small><label className="Rubik fs_12 fw-600 pb-3">First Name</label></small>
                                        <input type="text" name="first_name"
                                            value={formData.first_name}
                                            placeholder="First name"
                                            className="contact-input_field Poppins" required
                                            onInvalid={SetErrors}
                                            onChange={handleChange} />
                                        <div className="invalid-feedback">{formErrors.first_name}</div>
                                    </div>
                                    <div className='col-12 col-md-6 mt-3'>

                                        <small><label className="Rubik fs_12 fw-600 pb-3">Last Name</label></small>
                                        <input type="text" name="last_name"
                                            placeholder="Last name"
                                            value={formData.last_name}
                                            className="contact-input_field Poppins" required
                                            onInvalid={SetErrors}
                                            onChange={handleChange} />
                                        <div className="invalid-feedback">{formErrors.last_name}</div>
                                    </div>
                                    <div className='col-12 col-md-6 mt-3'>
                                        <small><label className="Rubik fs_12 fw-600 pb-3">Email</label></small>

                                        <input type="email" name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            className="contact-input_field Poppins" required
                                            onInvalid={SetErrors}
                                            onChange={handleChange} />
                                        <div className="invalid-feedback">{formErrors.email}</div>

                                    </div>
                                    <div className='col-12 col-md-6 mt-3'>
                                        <small><label className="Rubik fs_12 fw-600 pb-3">Phone Numbers</label></small>

                                        <input type="tel" name="phone"
                                            minlength="10" maxlength="13"
                                            placeholder="+1 012 3456 789"
                                            value={formData.phone}
                                            className="contact-input_field Poppins" required
                                            onInvalid={SetErrors}
                                            onChange={handleChange} />
                                        <div className="invalid-feedback">{formErrors.phone}</div>

                                    </div>
                                    <div className='col-12 mt-3'>
                                        <small><label className="Rubik fs_12 fw-600 pb-3">Address</label></small>

                                        <input type="text" name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            className="contact-input_field Poppins" required
                                            onInvalid={SetErrors}
                                            onChange={handleChange} />
                                        <div className="invalid-feedback">{formErrors.address}</div>
                                    </div>
                                </div>
                                {/* <div className="contact-radio_section mt-3">
                                    <label className="Rubik fs_12 fw-600 pb-3 Rubik">Select Subject?</label>
                                    <div className="d-flex gap-3">
                                        <label className="d-flex gap-2 poppins fs_12">
                                            <input
                                                type="radio"
                                                value="General Inquiry"
                                                checked={selectedSubject === 'General Inquiry'}
                                                onChange={e => { setSelectedSubject(e.target.value) }}
                                            />
                                            General Inquiry
                                        </label>
                                        <label className="d-flex gap-2 poppins fs_12">
                                            <input Specific Inquiry
                                                type="radio"
                                                value="Simple Inquiry"
                                                checked={selectedSubject === ' Specific Inquiry'}
                                                onChange={e => { setSelectedSubject(e.target.value) }}
                                            />
                                            Specific Inquiry
                                        </label>
                                    </div>
                                </div> */}
                                <div className="mt-3">
                                    <label className="Rubik fs_12 fw-600 pb-3">Message</label>
                                </div>
                                <textarea className="contact-input_field Poppins fs_12 fw-500 pb-3 "
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    placeholder="Write your message.." required
                                    onInvalid={SetErrors}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">{formErrors.message}</div>

                                <div className="d-flex justify-content-end pt-3">
                                    <button className="bg-lightblue border-0 button p-3 button-white" type={!IsClassAdded ? 'button' : 'submit'}
                                        disabled={Loading}
                                        onClick={() => setIsClassAdded(true)} >
                                        {Loading ? (
                                            <div className="whitespinner">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                        ) : (
                                            <span className="Rubik fs_16 button-text tc-snow" type="submit">Send Message</span>
                                        )}

                                    </button>
                                </div>
                                {/* <Modaal isOpen={isModalOpen} closeModal={setIsModalOpen} /> */}
                            </form>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
export default Contactform;