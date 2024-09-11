import React from 'react';

export default function ContactMe() {
    return (
        <section className="contact--form--container" id="ContactMe">
            <div>
                <button
                    onClick={() => window.open('https://github.com/sagarthegreat', '_blank')}
                    className="btn-github"
                >
                    GitHub
                </button>
            </div>
            <div>
                <button
                    onClick={() => window.open('https://www.linkedin.com/in/sagar-kikkeri-3879a2244/', '_blank')}
                    className="btn-linkedin"
                >
                    LinkedIn
                </button>
            </div>
        </section>
    );
}

