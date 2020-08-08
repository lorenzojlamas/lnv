// From: https://github.com/jamesmoriarty/react-instagram-authless-feed/blob/master/src/lib/Instagram.js
class Instagram {
    static getFeed(username: string) {
      const mapMedia = (json: any) => {
        const thumbnailIndex = (node: any) => {
          node.thumbnail_resources.forEach((item: any, index: any) => {
            if (item.config_width === 640) {
              return index;
            }
          });
  
          return 4; // MAGIC
        };
  
        const url = (node: any) => {
          return "https://www.instagram.com/p/" + node.shortcode;
        };
  
        const src = (node: any) => {
          switch (node.__typename) {
            case "GraphSidecar":
              return node.thumbnail_resources[thumbnailIndex(node)].src;
            case "GraphVideo":
              return node.thumbnail_src;
            default:
              return node.thumbnail_resources[thumbnailIndex(node)].src;
          }
        };
  
        const alt = (node: any) => {
          if (
            node.edge_media_to_caption.edges[0] &&
            node.edge_media_to_caption.edges[0].node
          ) {
            return node.edge_media_to_caption.edges[0].node.text;
          } else if (node.accessibility_caption) {
            return node.accessibility_caption;
          } else {
            return "";
          }
        };
  
        const edges =
          json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media
            .edges;
  
        return edges.map((edge: any) => {
          return {
            alt: alt(edge.node),
            url: url(edge.node),
            src: src(edge.node),
          };
        });
      };
  
      const url = "https://www.instagram.com/" + username + "/";
  
      return fetch(url)
        .then((resp) => resp.text())
        .then(
          (body) => body.split("window._sharedData = ")[1].split("</script>")[0]
        )
        .then((data) => JSON.parse(data.substr(0, data.length - 1)))
        .then((json) => mapMedia(json));
    }
  }
  
  export default Instagram;