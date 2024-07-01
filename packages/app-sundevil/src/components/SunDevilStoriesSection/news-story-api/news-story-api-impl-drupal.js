// @ts-check
import * as Result from "../../../utils/result";

/*
Example
{
    "nodes": [
        {
            "node": {
                "nid": "51473",
                "title": "Sun Devil Football: Wyoming at Arizona State",
                "campus": "Tempe campus",
                "locations": "Mountain America Stadium",
                "college_unit": "Sun Devil Athletics",
                "department": "Sun Devil Athletics",
                "field_cost_value": "Price varies",
                "event_price_level": "Price varies",
                "asu_events_price_desc": "Price varies",
                "body_summary": "\u003Cp\u003EThe 2024 season opens with the Arizona State Sun Devils taking on the Wyoming Cowboys at Mountain\u003C\/p\u003E",
                "full_body": "\u003Cp\u003EThe 2024 season opens with the Arizona State Sun Devils taking on the Wyoming Cowboys at Mountain America Stadium. Join the excitement and support our team in the new season.\u0026nbsp;\u003Cbr\u003E\u003Cbr\u003ETV broadcast: FS1\u003C\/p\u003E",
                "phone": "480-965-3482",
                "contactname": "",
                "email": "sundeviltickets@asu.edu",
                "alias": "https:\/\/asuevents.asu.edu\/event\/sun-devil-football-wyoming-arizona-state",
                "ticketing_rsvp_txt": "Get tickets",
                "ticketing_rsvp_url": "https:\/\/www.ticketmaster.com\/sun-devil-football-v-wyoming-football-tempe-arizona-08-31-2024\/event\/1900609836654B84?CAMEFROM=CFC_SUNDEVILS_WEB_SCHEDULEPG_FB\u0026amp;brand=sundevils\u0026amp;_ga=2.104016448.1345207152.1719860942-73422627.1681229914\u0026amp;_gl=1*ftfmnc*_gcl_au*OTQy",
                "website": "https:\/\/thesundevils.com\/",
                "image_url": "https:\/\/asuevents.asu.edu\/sites\/default\/files\/2024-07\/football-2024.jpg",
                "image_alt": "",
                "image_title": "",
                "start_date": "Aug 31 2024 - 7:30pm",
                "end_date": "Aug 31 2024 - 11:00pm",
                "time_description": "Kickoff at 7:30 pm on Saturday, August 31",
                "very_start_date": "2024-08-31T19:30:00Z",
                "very_end_date": "2024-08-31T23:00:00Z",
                "event_types": "Sports",
                "interests": "Sports",
                "audiences": "For alumni|For current ASU students|For donors|For staff|For faculty|For future students|For new students|For the community|For veterans",
                "event_units": "Sun Devil Athletics",
                "event_topics": "Sports",
                "download": "",
                "event_map_url": "https:\/\/maps.app.goo.gl\/RBrk3ah4FSvyyrSg8",
                "event_map_title": "",
                "event_video": "",
                "location_term": "Tempe campus",
                "venue_address": "500 E. Veterans Way",
                "venue_city": "Tempe",
                "venue_state": "AZ",
                "venue_zip": "85287",
                "delta": "0",
                "alias-indexed": "https:\/\/asuevents.asu.edu\/event\/sun-devil-football-wyoming-arizona-state?id=0",
                "sport_tag": "Football",
                "game_type": "home"
            }
        },

*/

/**
 * @type {(input: {apiUrl:string}) => import("./news-story-api").NewsStoryAPI}
 */
export const NewsStoryAPIDrupal = ({ apiUrl }) => {
  return {
    async findMany() {
      try {
        const fetched = await fetch(apiUrl);

        const json = await fetched.json();

        console.log(json);

        return Result.Ok([]);
      } catch (error) {
        return Result.Err(String(error));
      }
    },
  };
};
