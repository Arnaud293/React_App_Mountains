import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id=""/>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id=""/>
                        <label htmlFor="message">Message</label>
                        <textarea></textarea>
                        <button type="submit" className="btn2">Send Message</button>
                    </form>
        </div>
    );
};

export default Form;