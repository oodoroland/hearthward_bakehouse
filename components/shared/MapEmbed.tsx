export function MapEmbed({
  heightClassName = "h-[400px]",
  className = "",
}: {
  heightClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full ${heightClassName} rounded-2xl overflow-hidden shadow-lg bg-surface-container-high ${className}`}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24768039.522827618!2d-111.1933332!3d40.7302916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad493ab1be97%3A0x5f902dd2349acb0c!2sBaker%20Street%20Market!5e0!3m2!1sen!2sng!4v1788453382298!5m2!1sen!2sng"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
