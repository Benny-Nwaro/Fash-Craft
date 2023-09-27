export const NotFound = () => {
  return (
    <div>
      <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto p-8 text-white text-center">
          <div className="font-black text-9xl">
            404
          </div>
          <div className="mt-8">
            <p className="text-3xl font-semibold">
              Oops! The page you're looking for cannot be found.
            </p>
            <p className="mt-4">
              We apologize for the inconvenience. We understand your
              frustration, but don't worry, we're here to help.
            </p>
          </div>

          <div className="inline-block mt-10 px-6 py-3 bg-white text-blue-900 rounded-md text-lg font-semibold">
            Return to Homepage
          </div>
          <div className="mt-8">
            <p>
              If you have any questions or need assistance, feel free to contact
              us at{" "}
              <a
                className="text-blue-300"
                href="mailto:izebhijefavouredith@gmail.com"
              >
                fash-craft@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// function NotFoundPage() {
//   return (

//   );
// }

// export default NotFoundPage;
