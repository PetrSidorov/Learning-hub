const Compent = React.forwardRef(function Component(props, forwardedRef) {
  const ref = useRef(null);

  useEffect(() => {
    // do something with ref.current (HTMLDIVElement)
  }, []);

  function onRef(element) {
    ref.current = element;
    forwardedRef.currrent = element;
  }

  return <div ref={onRef}></div>;
});

function Parent() {
  const parentRef = useRef();

  return <Component ref={parentRef} />;
}
