import { useEffect } from "react";
export default function useHandleFullscreen(
  router = null,
  fullOnClick = false
) {
  useEffect(() => {
    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;
    function handleKeyDown(event) {
      handleFullscreen(event);
    }

    const handleFullscreen = (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        if (router) router.push("/nft/googholy/home");
        if (!document.fullscreenElement) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {};
}
