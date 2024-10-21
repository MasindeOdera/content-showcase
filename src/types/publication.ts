export interface Publication {
    id: string;
    name: string;
    category: string;
    status: string;
    description: string;
    created_on: string;
    modified_on: string;
    _computed: {
      editions_count: number;
      editions_published_count: number;
      background_color: string;
    };
    _links: {
      published: {
        href: string;
      };
      self: {
        href: string;
      };
    };
    _embedded: {
      account: {
        id: number;
        _links: {
          self: {
            href: string;
          };
        };
      };
      screenshot: {
        _links: {
          desktop: {
            href: string;
          };
        };
      };
    };
  }
  