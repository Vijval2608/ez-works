import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');
    const handleSubmit = async () => {
        if (!email) {
            setEmail(`Email is required `);
            return;
        }

        if (!isValidEmail(email)) {
            setEmail('Invalid email')
            return;
        }

        if (email.endsWith('@ez.works')) {
            setEmail('Email cannot end with @ez.works');
            return;
        }

        try {
            const response = await fetch('http://3.228.97.110:9000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                setEmail('Form Submitted');
            } else if (response.status === 422) {
                setEmail('Email cannot end with @ez.works');
            } else {
                setEmail('Error submitting the form');
            }
        } catch (error) {
            console.error('API request failed:', error);
            setEmail('Error submitting the form');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    return (
        <div className="contact">
            <input
                type="text"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" name="submit" id="btn" onClick={handleSubmit}>
                Contact Me
            </button>
        </div>
    );
}

export default Contact;
