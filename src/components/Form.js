import React from 'react';

const Form = () => {
    return (
        <div class="form-container">
                    <form>
                        <label for="name">Name</label>
                        <input type="text" name="name" id=""/>
                        <label for="email">Email</label>
                        <input type="text" name="email" id=""/>
                        <label for="message">Message</label>
                        <textarea></textarea>
                        <button type="submit" class="btn2">Send Message</button>
                    </form>
        </div>
    );
};

export default Form;