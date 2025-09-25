// import { useState } from 'react';
// import { Loader2, ImageIcon } from 'lucide-react';

// const ImageGenerator = () => {
//   const [prompt, setPrompt] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleGenerate = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);
//     setError('');
//     setImageUrl('');

//     try {
//       const res = await fetch('/api/image/generate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Something went wrong');

//       // Match backend response field name
//       setImageUrl(data.imageUrl);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 py-16">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-4">🎨 AI Image Generator</h1>
//         <p className="text-lg mb-8">Type a prompt and generate an image using AI.</p>

//         <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
//           <input
//             type="text"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="e.g. A robot reading a book in a library"
//             className="w-full px-4 py-3 rounded-lg border focus:outline-none shadow-md text-gray-900"
//           />
//           <button
//             onClick={handleGenerate}
//             disabled={loading}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow transition disabled:opacity-50"
//           >
//             {loading ? <Loader2 className="animate-spin" /> : 'Generate'}
//           </button>
//         </div>

//         {error && <p className="text-red-600 mb-4">{error}</p>}

//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt="Generated"
//             className="rounded-lg shadow-lg max-w-full mx-auto"
//           />
//         ) : (
//           !loading && (
//             <div className="mt-10 text-gray-500 flex flex-col items-center">
//               <ImageIcon className="w-16 h-16 mb-2" />
//               <p className="italic">Your image will appear here</p>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageGenerator;
