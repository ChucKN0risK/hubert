// From: https://stackoverflow.com/a/61472427/3906770
import { ComponentProps, FC, useEffect, useRef, useState } from "react";

interface IconProps extends ComponentProps<"svg"> {
  name: string;
}

// This hook can be used to create your own wrapper component.
const useIconImport = (name: string) => {
  const importRef = useRef<FC<ComponentProps<"svg">>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        importRef.current = (
          await import(`../../../assets/vectors/${name}.svg?react`)
        ).default; // We use `?react` here following `vite-plugin-svgr`'s convention.
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return {
    error,
    loading,
    Svg: importRef.current,
  };
};

// Example wrapper component using the hook.
export const Icon = ({ name, ...props }: IconProps) => {
  const { loading, error, Svg } = useIconImport(name);

  if (error) {
    return "An error occurred";
  }

  if (loading) {
    return "Loading...";
  }

  if (!Svg) {
    return null;
  }

  return <Svg {...props} />;
};

export default Icon;