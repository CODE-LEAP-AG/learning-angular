import { Component, OnInit } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '@share/components';
import { MovieCardComponent } from '@share/components';
import { LoadingComponent } from '@share/components';
import { delay } from '@share/utils';
import { MovieBackdropComponent } from '@share/components';
import { MovieService } from '@share/services/movie/movie.service';
import gsap from 'gsap';
import { AboutComponent } from '@share/components';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent, MovieCardComponent, LoadingComponent, MovieBackdropComponent, AboutComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  openPlayer = false
  loading = true
  public topRated: IMovie = {
    "adult": false,
    "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
    "genre_ids": [
      28,
      878,
      12
    ],
    "id": 823464,
    "original_language": "en",
    "original_title": "Godzilla x Kong: The New Empire",
    "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    "popularity": 3878.463,
    "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
    "release_date": "2024-03-27",
    "title": "Godzilla x Kong: The New Empire",
    "video": false,
    "vote_average": 6.762,
    "vote_count": 345
  }
  public topRatedList: Array<IMovie> = [
    {
      "adult": false,
      "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 823464,
      "original_language": "en",
      "original_title": "Godzilla x Kong: The New Empire",
      "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      "popularity": 3878.463,
      "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
      "release_date": "2024-03-27",
      "title": "Godzilla x Kong: The New Empire",
      "video": false,
      "vote_average": 6.762,
      "vote_count": 345
    },
    {
      "adult": false,
      "backdrop_path": "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
      "genre_ids": [
        28,
        12,
        16,
        35,
        10751
      ],
      "id": 1011985,
      "original_language": "en",
      "original_title": "Kung Fu Panda 4",
      "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
      "popularity": 2534.679,
      "poster_path": "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      "release_date": "2024-03-02",
      "title": "Kung Fu Panda 4",
      "video": false,
      "vote_average": 6.838,
      "vote_count": 547
    },
    {
      "adult": false,
      "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 359410,
      "original_language": "en",
      "original_title": "Road House",
      "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
      "popularity": 2147.281,
      "poster_path": "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
      "release_date": "2024-03-08",
      "title": "Road House",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 1126
    },
    {
      "adult": false,
      "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 634492,
      "original_language": "en",
      "original_title": "Madame Web",
      "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
      "popularity": 1308.054,
      "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
      "release_date": "2024-02-14",
      "title": "Madame Web",
      "video": false,
      "vote_average": 5.658,
      "vote_count": 934
    },
    {
      "adult": false,
      "backdrop_path": "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
      "genre_ids": [
        28,
        14,
        10752
      ],
      "id": 856289,
      "original_language": "zh",
      "original_title": "封神第一部：朝歌风云",
      "overview": "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
      "popularity": 970.826,
      "poster_path": "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
      "release_date": "2023-07-20",
      "title": "Creation of the Gods I: Kingdom of Storms",
      "video": false,
      "vote_average": 6.881,
      "vote_count": 164
    },
    {
      "adult": false,
      "backdrop_path": "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 763215,
      "original_language": "en",
      "original_title": "Damsel",
      "overview": "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
      "popularity": 894.547,
      "poster_path": "/AgHbB9DCE9aE57zkHjSmseszh6e.jpg",
      "release_date": "2024-03-07",
      "title": "Damsel",
      "video": false,
      "vote_average": 7.154,
      "vote_count": 1410
    },
    {
      "adult": false,
      "backdrop_path": "/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
      "genre_ids": [
        878,
        28,
        14,
        12
      ],
      "id": 601796,
      "original_language": "ko",
      "original_title": "외계+인 1부",
      "overview": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
      "popularity": 768.866,
      "poster_path": "/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
      "release_date": "2022-07-20",
      "title": "Alienoid",
      "video": false,
      "vote_average": 7.053,
      "vote_count": 244
    },
    {
      "adult": false,
      "backdrop_path": "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      "genre_ids": [
        16,
        28,
        12,
        35,
        10751
      ],
      "id": 940551,
      "original_language": "en",
      "original_title": "Migration",
      "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      "popularity": 858.977,
      "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      "release_date": "2023-12-06",
      "title": "Migration",
      "video": false,
      "vote_average": 7.536,
      "vote_count": 1069
    },
    {
      "adult": false,
      "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 1096197,
      "original_language": "pt",
      "original_title": "No Way Up",
      "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      "popularity": 682.723,
      "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      "release_date": "2024-01-18",
      "title": "No Way Up",
      "video": false,
      "vote_average": 6.252,
      "vote_count": 323
    },
    {
      "adult": false,
      "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      "genre_ids": [
        878,
        12
      ],
      "id": 693134,
      "original_language": "en",
      "original_title": "Dune: Part Two",
      "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      "popularity": 717.403,
      "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      "release_date": "2024-02-27",
      "title": "Dune: Part Two",
      "video": false,
      "vote_average": 8.358,
      "vote_count": 2384
    },
    {
      "adult": false,
      "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
      "genre_ids": [
        28,
        12,
        878,
        14,
        18
      ],
      "id": 624091,
      "original_language": "id",
      "original_title": "Sri Asih",
      "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
      "popularity": 633.188,
      "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
      "release_date": "2022-11-17",
      "title": "Sri Asih",
      "video": false,
      "vote_average": 6.153,
      "vote_count": 62
    },
    {
      "adult": false,
      "backdrop_path": "/9c0lHTXRqDBxeOToVzRu0GArSne.jpg",
      "genre_ids": [
        878,
        28
      ],
      "id": 935271,
      "original_language": "en",
      "original_title": "After the Pandemic",
      "overview": "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers.",
      "popularity": 948.492,
      "poster_path": "/p1LbrdJ53dGfEhRopG71akfzOVu.jpg",
      "release_date": "2022-03-01",
      "title": "After the Pandemic",
      "video": false,
      "vote_average": 4.5,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg",
      "genre_ids": [
        16,
        35,
        878
      ],
      "id": 1239251,
      "original_language": "en",
      "original_title": "Megamind vs. the Doom Syndicate",
      "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
      "popularity": 524.45,
      "poster_path": "/fko8CPrnspewLXgFUlUkivyvpHX.jpg",
      "release_date": "2024-03-29",
      "title": "Megamind vs. the Doom Syndicate",
      "video": false,
      "vote_average": 5.722,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 399566,
      "original_language": "en",
      "original_title": "Godzilla vs. Kong",
      "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      "popularity": 532.511,
      "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      "release_date": "2021-03-24",
      "title": "Godzilla vs. Kong",
      "video": false,
      "vote_average": 7.627,
      "vote_count": 9508
    },
    {
      "adult": false,
      "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
      "genre_ids": [
        28,
        53,
        10752
      ],
      "id": 969492,
      "original_language": "en",
      "original_title": "Land of Bad",
      "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
      "popularity": 497.896,
      "poster_path": "/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
      "release_date": "2024-01-25",
      "title": "Land of Bad",
      "video": false,
      "vote_average": 7.132,
      "vote_count": 469
    },
    {
      "adult": false,
      "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
      "genre_ids": [
        878,
        27,
        28
      ],
      "id": 940721,
      "original_language": "ja",
      "original_title": "ゴジラ-1.0",
      "overview": "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      "popularity": 512.953,
      "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      "release_date": "2023-11-03",
      "title": "Godzilla Minus One",
      "video": false,
      "vote_average": 7.872,
      "vote_count": 461
    },
    {
      "adult": false,
      "backdrop_path": "/u0P5drNyTrZoGyJONPcZGbv1mNP.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1124127,
      "original_language": "en",
      "original_title": "Air Force One Down",
      "overview": "On her first assignment aboard Air Force One, a rookie Secret Service agent faces the ultimate test when terrorists hijack the plane, intent on derailing a pivotal energy deal. With the President's life on the line and a global crisis at stake, her bravery and skills are pushed to the limit in a relentless battle that could change the course of history.",
      "popularity": 425.344,
      "poster_path": "/nKPoSD4pZ3s3CJ9g3cqWRcQ41TC.jpg",
      "release_date": "2024-02-09",
      "title": "Air Force One Down",
      "video": false,
      "vote_average": 6.492,
      "vote_count": 59
    },
    {
      "adult": false,
      "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
      "genre_ids": [
        28
      ],
      "id": 1049948,
      "original_language": "en",
      "original_title": "Vikings: Battle of Heirs",
      "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
      "popularity": 470.624,
      "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
      "release_date": "2023-04-28",
      "title": "Vikings: Battle of Heirs",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
      "genre_ids": [
        28,
        12,
        35
      ],
      "id": 848538,
      "original_language": "en",
      "original_title": "Argylle",
      "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
      "popularity": 422.057,
      "poster_path": "/siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
      "release_date": "2024-01-31",
      "title": "Argylle",
      "video": false,
      "vote_average": 6.156,
      "vote_count": 775
    },
    {
      "adult": false,
      "backdrop_path": "/mEoIDEiePnYj178H9znzbl9zvky.jpg",
      "genre_ids": [
        28
      ],
      "id": 1006540,
      "original_language": "en",
      "original_title": "Bullet Train Down",
      "overview": "On its maiden run, the world's fastest bullet train is rigged with a bomb that will explode if it dips below 200 mph.",
      "popularity": 444.734,
      "poster_path": "/5a7cocgyVuFjYV71neDIGVzD6Yq.jpg",
      "release_date": "2022-08-01",
      "title": "Bullet Train Down",
      "video": false,
      "vote_average": 5.361,
      "vote_count": 36
    }
  ]
  public popularList: Array<IMovie> = [
    {
      "adult": false,
      "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 823464,
      "original_language": "en",
      "original_title": "Godzilla x Kong: The New Empire",
      "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      "popularity": 3878.463,
      "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
      "release_date": "2024-03-27",
      "title": "Godzilla x Kong: The New Empire",
      "video": false,
      "vote_average": 6.762,
      "vote_count": 345
    },
    {
      "adult": false,
      "backdrop_path": "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
      "genre_ids": [
        28,
        12,
        16,
        35,
        10751
      ],
      "id": 1011985,
      "original_language": "en",
      "original_title": "Kung Fu Panda 4",
      "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
      "popularity": 2534.679,
      "poster_path": "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      "release_date": "2024-03-02",
      "title": "Kung Fu Panda 4",
      "video": false,
      "vote_average": 6.838,
      "vote_count": 547
    },
    {
      "adult": false,
      "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 359410,
      "original_language": "en",
      "original_title": "Road House",
      "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
      "popularity": 2147.281,
      "poster_path": "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
      "release_date": "2024-03-08",
      "title": "Road House",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 1126
    },
    {
      "adult": false,
      "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 634492,
      "original_language": "en",
      "original_title": "Madame Web",
      "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
      "popularity": 1308.054,
      "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
      "release_date": "2024-02-14",
      "title": "Madame Web",
      "video": false,
      "vote_average": 5.658,
      "vote_count": 934
    },
    {
      "adult": false,
      "backdrop_path": "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
      "genre_ids": [
        28,
        14,
        10752
      ],
      "id": 856289,
      "original_language": "zh",
      "original_title": "封神第一部：朝歌风云",
      "overview": "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
      "popularity": 970.826,
      "poster_path": "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
      "release_date": "2023-07-20",
      "title": "Creation of the Gods I: Kingdom of Storms",
      "video": false,
      "vote_average": 6.881,
      "vote_count": 164
    },
    {
      "adult": false,
      "backdrop_path": "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 763215,
      "original_language": "en",
      "original_title": "Damsel",
      "overview": "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
      "popularity": 894.547,
      "poster_path": "/AgHbB9DCE9aE57zkHjSmseszh6e.jpg",
      "release_date": "2024-03-07",
      "title": "Damsel",
      "video": false,
      "vote_average": 7.154,
      "vote_count": 1410
    },
    {
      "adult": false,
      "backdrop_path": "/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
      "genre_ids": [
        878,
        28,
        14,
        12
      ],
      "id": 601796,
      "original_language": "ko",
      "original_title": "외계+인 1부",
      "overview": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
      "popularity": 768.866,
      "poster_path": "/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
      "release_date": "2022-07-20",
      "title": "Alienoid",
      "video": false,
      "vote_average": 7.053,
      "vote_count": 244
    },
    {
      "adult": false,
      "backdrop_path": "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      "genre_ids": [
        16,
        28,
        12,
        35,
        10751
      ],
      "id": 940551,
      "original_language": "en",
      "original_title": "Migration",
      "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      "popularity": 858.977,
      "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      "release_date": "2023-12-06",
      "title": "Migration",
      "video": false,
      "vote_average": 7.536,
      "vote_count": 1069
    },
    {
      "adult": false,
      "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 1096197,
      "original_language": "pt",
      "original_title": "No Way Up",
      "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      "popularity": 682.723,
      "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      "release_date": "2024-01-18",
      "title": "No Way Up",
      "video": false,
      "vote_average": 6.252,
      "vote_count": 323
    },
    {
      "adult": false,
      "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      "genre_ids": [
        878,
        12
      ],
      "id": 693134,
      "original_language": "en",
      "original_title": "Dune: Part Two",
      "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      "popularity": 717.403,
      "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      "release_date": "2024-02-27",
      "title": "Dune: Part Two",
      "video": false,
      "vote_average": 8.358,
      "vote_count": 2384
    },
    {
      "adult": false,
      "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
      "genre_ids": [
        28,
        12,
        878,
        14,
        18
      ],
      "id": 624091,
      "original_language": "id",
      "original_title": "Sri Asih",
      "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
      "popularity": 633.188,
      "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
      "release_date": "2022-11-17",
      "title": "Sri Asih",
      "video": false,
      "vote_average": 6.153,
      "vote_count": 62
    },
    {
      "adult": false,
      "backdrop_path": "/9c0lHTXRqDBxeOToVzRu0GArSne.jpg",
      "genre_ids": [
        878,
        28
      ],
      "id": 935271,
      "original_language": "en",
      "original_title": "After the Pandemic",
      "overview": "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers.",
      "popularity": 948.492,
      "poster_path": "/p1LbrdJ53dGfEhRopG71akfzOVu.jpg",
      "release_date": "2022-03-01",
      "title": "After the Pandemic",
      "video": false,
      "vote_average": 4.5,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg",
      "genre_ids": [
        16,
        35,
        878
      ],
      "id": 1239251,
      "original_language": "en",
      "original_title": "Megamind vs. the Doom Syndicate",
      "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
      "popularity": 524.45,
      "poster_path": "/fko8CPrnspewLXgFUlUkivyvpHX.jpg",
      "release_date": "2024-03-29",
      "title": "Megamind vs. the Doom Syndicate",
      "video": false,
      "vote_average": 5.722,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 399566,
      "original_language": "en",
      "original_title": "Godzilla vs. Kong",
      "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      "popularity": 532.511,
      "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      "release_date": "2021-03-24",
      "title": "Godzilla vs. Kong",
      "video": false,
      "vote_average": 7.627,
      "vote_count": 9508
    },
    {
      "adult": false,
      "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
      "genre_ids": [
        28,
        53,
        10752
      ],
      "id": 969492,
      "original_language": "en",
      "original_title": "Land of Bad",
      "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
      "popularity": 497.896,
      "poster_path": "/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
      "release_date": "2024-01-25",
      "title": "Land of Bad",
      "video": false,
      "vote_average": 7.132,
      "vote_count": 469
    },
    {
      "adult": false,
      "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
      "genre_ids": [
        878,
        27,
        28
      ],
      "id": 940721,
      "original_language": "ja",
      "original_title": "ゴジラ-1.0",
      "overview": "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      "popularity": 512.953,
      "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      "release_date": "2023-11-03",
      "title": "Godzilla Minus One",
      "video": false,
      "vote_average": 7.872,
      "vote_count": 461
    },
    {
      "adult": false,
      "backdrop_path": "/u0P5drNyTrZoGyJONPcZGbv1mNP.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1124127,
      "original_language": "en",
      "original_title": "Air Force One Down",
      "overview": "On her first assignment aboard Air Force One, a rookie Secret Service agent faces the ultimate test when terrorists hijack the plane, intent on derailing a pivotal energy deal. With the President's life on the line and a global crisis at stake, her bravery and skills are pushed to the limit in a relentless battle that could change the course of history.",
      "popularity": 425.344,
      "poster_path": "/nKPoSD4pZ3s3CJ9g3cqWRcQ41TC.jpg",
      "release_date": "2024-02-09",
      "title": "Air Force One Down",
      "video": false,
      "vote_average": 6.492,
      "vote_count": 59
    },
    {
      "adult": false,
      "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
      "genre_ids": [
        28
      ],
      "id": 1049948,
      "original_language": "en",
      "original_title": "Vikings: Battle of Heirs",
      "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
      "popularity": 470.624,
      "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
      "release_date": "2023-04-28",
      "title": "Vikings: Battle of Heirs",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
      "genre_ids": [
        28,
        12,
        35
      ],
      "id": 848538,
      "original_language": "en",
      "original_title": "Argylle",
      "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
      "popularity": 422.057,
      "poster_path": "/siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
      "release_date": "2024-01-31",
      "title": "Argylle",
      "video": false,
      "vote_average": 6.156,
      "vote_count": 775
    },
    {
      "adult": false,
      "backdrop_path": "/mEoIDEiePnYj178H9znzbl9zvky.jpg",
      "genre_ids": [
        28
      ],
      "id": 1006540,
      "original_language": "en",
      "original_title": "Bullet Train Down",
      "overview": "On its maiden run, the world's fastest bullet train is rigged with a bomb that will explode if it dips below 200 mph.",
      "popularity": 444.734,
      "poster_path": "/5a7cocgyVuFjYV71neDIGVzD6Yq.jpg",
      "release_date": "2022-08-01",
      "title": "Bullet Train Down",
      "video": false,
      "vote_average": 5.361,
      "vote_count": 36
    }
  ]
  public upcomingList: Array<IMovie> = [
    {
      "adult": false,
      "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 823464,
      "original_language": "en",
      "original_title": "Godzilla x Kong: The New Empire",
      "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      "popularity": 3878.463,
      "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
      "release_date": "2024-03-27",
      "title": "Godzilla x Kong: The New Empire",
      "video": false,
      "vote_average": 6.762,
      "vote_count": 345
    },
    {
      "adult": false,
      "backdrop_path": "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
      "genre_ids": [
        28,
        12,
        16,
        35,
        10751
      ],
      "id": 1011985,
      "original_language": "en",
      "original_title": "Kung Fu Panda 4",
      "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
      "popularity": 2534.679,
      "poster_path": "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      "release_date": "2024-03-02",
      "title": "Kung Fu Panda 4",
      "video": false,
      "vote_average": 6.838,
      "vote_count": 547
    },
    {
      "adult": false,
      "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 359410,
      "original_language": "en",
      "original_title": "Road House",
      "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
      "popularity": 2147.281,
      "poster_path": "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
      "release_date": "2024-03-08",
      "title": "Road House",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 1126
    },
    {
      "adult": false,
      "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 634492,
      "original_language": "en",
      "original_title": "Madame Web",
      "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
      "popularity": 1308.054,
      "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
      "release_date": "2024-02-14",
      "title": "Madame Web",
      "video": false,
      "vote_average": 5.658,
      "vote_count": 934
    },
    {
      "adult": false,
      "backdrop_path": "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
      "genre_ids": [
        28,
        14,
        10752
      ],
      "id": 856289,
      "original_language": "zh",
      "original_title": "封神第一部：朝歌风云",
      "overview": "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
      "popularity": 970.826,
      "poster_path": "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
      "release_date": "2023-07-20",
      "title": "Creation of the Gods I: Kingdom of Storms",
      "video": false,
      "vote_average": 6.881,
      "vote_count": 164
    },
    {
      "adult": false,
      "backdrop_path": "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 763215,
      "original_language": "en",
      "original_title": "Damsel",
      "overview": "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
      "popularity": 894.547,
      "poster_path": "/AgHbB9DCE9aE57zkHjSmseszh6e.jpg",
      "release_date": "2024-03-07",
      "title": "Damsel",
      "video": false,
      "vote_average": 7.154,
      "vote_count": 1410
    },
    {
      "adult": false,
      "backdrop_path": "/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
      "genre_ids": [
        878,
        28,
        14,
        12
      ],
      "id": 601796,
      "original_language": "ko",
      "original_title": "외계+인 1부",
      "overview": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
      "popularity": 768.866,
      "poster_path": "/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
      "release_date": "2022-07-20",
      "title": "Alienoid",
      "video": false,
      "vote_average": 7.053,
      "vote_count": 244
    },
    {
      "adult": false,
      "backdrop_path": "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
      "genre_ids": [
        16,
        28,
        12,
        35,
        10751
      ],
      "id": 940551,
      "original_language": "en",
      "original_title": "Migration",
      "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      "popularity": 858.977,
      "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      "release_date": "2023-12-06",
      "title": "Migration",
      "video": false,
      "vote_average": 7.536,
      "vote_count": 1069
    },
    {
      "adult": false,
      "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 1096197,
      "original_language": "pt",
      "original_title": "No Way Up",
      "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      "popularity": 682.723,
      "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      "release_date": "2024-01-18",
      "title": "No Way Up",
      "video": false,
      "vote_average": 6.252,
      "vote_count": 323
    },
    {
      "adult": false,
      "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      "genre_ids": [
        878,
        12
      ],
      "id": 693134,
      "original_language": "en",
      "original_title": "Dune: Part Two",
      "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      "popularity": 717.403,
      "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      "release_date": "2024-02-27",
      "title": "Dune: Part Two",
      "video": false,
      "vote_average": 8.358,
      "vote_count": 2384
    },
    {
      "adult": false,
      "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
      "genre_ids": [
        28,
        12,
        878,
        14,
        18
      ],
      "id": 624091,
      "original_language": "id",
      "original_title": "Sri Asih",
      "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
      "popularity": 633.188,
      "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
      "release_date": "2022-11-17",
      "title": "Sri Asih",
      "video": false,
      "vote_average": 6.153,
      "vote_count": 62
    },
    {
      "adult": false,
      "backdrop_path": "/9c0lHTXRqDBxeOToVzRu0GArSne.jpg",
      "genre_ids": [
        878,
        28
      ],
      "id": 935271,
      "original_language": "en",
      "original_title": "After the Pandemic",
      "overview": "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers.",
      "popularity": 948.492,
      "poster_path": "/p1LbrdJ53dGfEhRopG71akfzOVu.jpg",
      "release_date": "2022-03-01",
      "title": "After the Pandemic",
      "video": false,
      "vote_average": 4.5,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg",
      "genre_ids": [
        16,
        35,
        878
      ],
      "id": 1239251,
      "original_language": "en",
      "original_title": "Megamind vs. the Doom Syndicate",
      "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
      "popularity": 524.45,
      "poster_path": "/fko8CPrnspewLXgFUlUkivyvpHX.jpg",
      "release_date": "2024-03-29",
      "title": "Megamind vs. the Doom Syndicate",
      "video": false,
      "vote_average": 5.722,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 399566,
      "original_language": "en",
      "original_title": "Godzilla vs. Kong",
      "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      "popularity": 532.511,
      "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      "release_date": "2021-03-24",
      "title": "Godzilla vs. Kong",
      "video": false,
      "vote_average": 7.627,
      "vote_count": 9508
    },
    {
      "adult": false,
      "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
      "genre_ids": [
        28,
        53,
        10752
      ],
      "id": 969492,
      "original_language": "en",
      "original_title": "Land of Bad",
      "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
      "popularity": 497.896,
      "poster_path": "/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
      "release_date": "2024-01-25",
      "title": "Land of Bad",
      "video": false,
      "vote_average": 7.132,
      "vote_count": 469
    },
    {
      "adult": false,
      "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
      "genre_ids": [
        878,
        27,
        28
      ],
      "id": 940721,
      "original_language": "ja",
      "original_title": "ゴジラ-1.0",
      "overview": "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      "popularity": 512.953,
      "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      "release_date": "2023-11-03",
      "title": "Godzilla Minus One",
      "video": false,
      "vote_average": 7.872,
      "vote_count": 461
    },
    {
      "adult": false,
      "backdrop_path": "/u0P5drNyTrZoGyJONPcZGbv1mNP.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1124127,
      "original_language": "en",
      "original_title": "Air Force One Down",
      "overview": "On her first assignment aboard Air Force One, a rookie Secret Service agent faces the ultimate test when terrorists hijack the plane, intent on derailing a pivotal energy deal. With the President's life on the line and a global crisis at stake, her bravery and skills are pushed to the limit in a relentless battle that could change the course of history.",
      "popularity": 425.344,
      "poster_path": "/nKPoSD4pZ3s3CJ9g3cqWRcQ41TC.jpg",
      "release_date": "2024-02-09",
      "title": "Air Force One Down",
      "video": false,
      "vote_average": 6.492,
      "vote_count": 59
    },
    {
      "adult": false,
      "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
      "genre_ids": [
        28
      ],
      "id": 1049948,
      "original_language": "en",
      "original_title": "Vikings: Battle of Heirs",
      "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
      "popularity": 470.624,
      "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
      "release_date": "2023-04-28",
      "title": "Vikings: Battle of Heirs",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
      "genre_ids": [
        28,
        12,
        35
      ],
      "id": 848538,
      "original_language": "en",
      "original_title": "Argylle",
      "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
      "popularity": 422.057,
      "poster_path": "/siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
      "release_date": "2024-01-31",
      "title": "Argylle",
      "video": false,
      "vote_average": 6.156,
      "vote_count": 775
    },
    {
      "adult": false,
      "backdrop_path": "/mEoIDEiePnYj178H9znzbl9zvky.jpg",
      "genre_ids": [
        28
      ],
      "id": 1006540,
      "original_language": "en",
      "original_title": "Bullet Train Down",
      "overview": "On its maiden run, the world's fastest bullet train is rigged with a bomb that will explode if it dips below 200 mph.",
      "popularity": 444.734,
      "poster_path": "/5a7cocgyVuFjYV71neDIGVzD6Yq.jpg",
      "release_date": "2022-08-01",
      "title": "Bullet Train Down",
      "video": false,
      "vote_average": 5.361,
      "vote_count": 36
    }
  ]
  private popularTl = gsap.timeline()
  constructor(private movieService: MovieService) { }
  async ngOnInit(): Promise<void> {
    try {
      this.loading = true
      // await delay(3000)
      // const resp = await Promise.all([this.movieService.getPopularMovies(1), this.movieService.getTopRatedMovie(1), this.movieService.getUpComingMovie(1)])
      // this.popularList = resp[0] ?? []
      // this.topRatedList = resp[1] ?? []
      // this.upcomingList = resp[2] ?? []
      // this.topRated = this.popularList[Math.floor(Math.random() * 6)]

    } catch (error) {
      console.log("Error in get movie: ", error)
    } finally {
      this.loading = false
    }
  }


  togglePlayer(isOpen: boolean) {
    this.openPlayer = isOpen
  }
}
