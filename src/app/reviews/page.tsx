export default function Contact() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold text-center text-pink-500 mb-4">Book Reviews</h1>
            <h5 className="text-lg font-normal text-center text-gray-800 mb-6">Your Opinion Matters!</h5>
            <p className="text-base text-gray-700 mb-6">
                We believe every book has a story to tell, and so do you! Here are some reviews from our amazing readers. Share your thoughts with us!
            </p>

            <div className="text-base text-gray-800 mb-6">
                <p>"A beautifully crafted narrative that captivated me from the first page."</p>
                <p className="text-sm text-gray-600">– Alishba</p>
            </div>

            <div className="text-base text-gray-800 mb-6">
                <p>"This book was a breath of fresh air in the genre."</p>
                <p className="text-sm text-gray-600">– Adul Basit</p>
            </div>

            <p className="text-base text-gray-700 mt-6">Share your review here!</p>
        </div>
    );
}
