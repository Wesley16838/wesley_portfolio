const CJK = /([㐀-鿿]+)/;

/**
 * The page is lang="en"; this marks Chinese runs inside mixed text so screen
 * readers switch voice instead of spelling the characters out.
 */
export default function Lang({ children }: { children: string }) {
  if (!CJK.test(children)) return <>{children}</>;
  return (
    <>
      {children.split(CJK).map((part, i) =>
        CJK.test(part) ? (
          <span key={i} lang="zh-Hant">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
