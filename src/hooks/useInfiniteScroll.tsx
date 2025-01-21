import { useEffect } from "react";

export default function useInfiniteScroll(
  fetchMoreUsersData: () => void,
  sentinelRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        fetchMoreUsersData();
      }
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [sentinelRef]);
}
