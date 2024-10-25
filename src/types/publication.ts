export interface Publication {
    id: number;
    name: string;
    category: string;
    status: string;
    created_on: string;
    modified_on: string;
    screenshot?: string;
    _links: {
      published: {
        href: string;
      };
      publish: {
        href: string;
      };
      self: {
        href: string;
      };
      comments: {
        href: string;
      };
      editor: {
        href: string;
      };
    };
    _embedded: {
      screenshot: {
        _links: {
          desktop: {
            href: string;
          };
          google: {
            href: string;
          };
        };
      };
    };
  }
  