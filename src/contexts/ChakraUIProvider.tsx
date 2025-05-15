import { ChakraProvider, EnvironmentProvider } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { useEffect, useState } from "react";
import root from "react-shadow/emotion";

import { system } from "./system";

export default function ChakraUIProvider(props: ThemeProviderProps) {
  const [shadow, setShadow] = useState<HTMLElement | null>(null);
  const [cache, setCache] = useState<ReturnType<typeof createCache> | null>(null);

  useEffect(() => {
    if (!shadow?.shadowRoot || cache) return;

    const emotionCache = createCache({
      key: "root",
      container: shadow.shadowRoot,
    });
    setCache(emotionCache);
  }, [shadow, cache]);

  return (
    <root.div ref={setShadow}>
      {shadow && cache && (
        <EnvironmentProvider value={() => shadow.shadowRoot ?? document}>
          <CacheProvider value={cache}>
            <ChakraProvider value={system}>
              <ThemeProvider {...props} attribute="class" enableSystem={false} />
            </ChakraProvider>
          </CacheProvider>
        </EnvironmentProvider>
      )}
    </root.div>
  );
}
