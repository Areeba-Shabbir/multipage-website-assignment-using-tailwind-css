// export default function Contact(){
//     return(
//         <div><br />
//             <h1> Get in Touch with Us </h1>
//             Get in Touch with Us

// We'd love to hear from you! Whether you have a question, feedback, or just want to chat about your latest read, don’t hesitate to reach out. Here’s how you can connect with us: <br />

// Email: shabbirareeba94@gmail.com <br />
// Social Media: Follow us on <h5>Instagram</h5>
//                             <h5>Facebook</h5> 
//                             <h5>LinkedIn</h5>
//  share your thoughts and suggestions.
// Your insights help us create a better reading experience for everyone!
// <br /><br /><br /><br /><br /><br /><br /><br />

//         </div>
        
//     )
// }











export default function Contact() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center text-pink-700 mb-6">Get in Touch with Us</h1>
  
        {/* Description */}
        <p className="text-lg text-gray-700 mb-4">
          We'd love to hear from you! Whether you have a question, feedback, or just want to chat about your latest read,
          don’t hesitate to reach out. Here’s how you can connect with us:
        </p>
  
        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <p className="text-gray-700">Email: <span className="font-medium">shabbirareeba94@gmail.com</span></p>
          <p className="text-gray-700">Social Media: Follow us on</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li><h5 className="text-pink-600">Instagram</h5></li>
            <li><h5 className="text-pink-600">Facebook</h5></li>
            <li><h5 className="text-pink-600">LinkedIn</h5></li>
          </ul>
        </div>
  
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Thoughts</h3>
          <form action="#" method="POST">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your thoughts..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-pink-700 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  