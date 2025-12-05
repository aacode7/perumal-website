export default function Loader() {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/30 backdrop-blur-md z-50 animate-fadeIn">
            <img
                src="https://res.cloudinary.com/dfyufd3gl/image/upload/v1764845213/cropped_circle_image_1_l8siml.png"
                alt="Sri Venkateshwara Swamy"
                className="w-40 animate-bounce drop-shadow-2xl"
            />
            <p className="text-gold text-xl font-bold mt-4 drop-shadow-lg">
                || Om Namo Venkatesaya ||
            </p>
        </div>
    );
}
