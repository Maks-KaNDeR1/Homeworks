import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Preloader() {
  return (
    <SkeletonTheme width="500px" baseColor="#4484d4" highlightColor="#ff00ae">
      <p>
        <Skeleton baseColor="#4484d4" highlightColor="#ff00ae" count={1} />
        <Skeleton baseColor="#497275" highlightColor="navy" count={1} />
        <Skeleton baseColor="green" highlightColor="aqua" count={1} />
        <Skeleton baseColor="aqua" highlightColor="gold" count={1} />
      </p>
    </SkeletonTheme>
  );
}
