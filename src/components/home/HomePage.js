import React from "react";
import { Link } from "react-router-dom";
import profile from "../../Profile_Photo.png";
import Contact from "./Contact";

const HomePage = () => (
  <div className="page jumbotron">
    <h1 className="center">Hi my Name is Shakeeb</h1>
    <div id="info">
      <img id="profile" className="center" src={profile} alt="Profile" />
      <p>
        I am interested in Physics, Math, Neuroscience, Martial Arts and much
        more
      </p>
    </div>
    <Contact />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      consectetur orci quis iaculis consequat. Mauris commodo pulvinar dolor vel
      auctor. Donec interdum rhoncus diam, eu malesuada turpis feugiat ut. Nunc
      id luctus erat. Pellentesque est nunc, pulvinar non diam eu, accumsan
      luctus leo. Ut a pulvinar neque. Suspendisse auctor lectus eu diam blandit
      auctor. Curabitur varius, nulla vel luctus condimentum, mauris nisi
      pretium nunc, at aliquam metus mi nec nibh. Quisque pulvinar, turpis in
      elementum ultricies, sapien massa sodales nunc, quis tristique urna ligula
      id arcu. Donec volutpat, nunc eget tincidunt finibus, eros ipsum consequat
      urna, nec aliquet justo libero eget nisi. Maecenas semper neque nec dolor
      cursus rutrum. Vestibulum ut lectus at massa aliquam accumsan vel ut
      risus. Ut eget ligula magna. Maecenas congue porta quam, ut sollicitudin
      lacus cursus commodo. Aliquam eget tempor leo, eget rutrum lacus. Nunc
      luctus blandit felis, at suscipit ligula elementum nec. Mauris eu mauris
      tincidunt justo finibus scelerisque. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Suspendisse a
      consequat lectus. Nunc quis augue ut urna viverra auctor. Maecenas aliquet
      neque in maximus sollicitudin. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Vestibulum sit amet orci ornare, suscipit ex a, accumsan
      ante. Phasellus sed urna tortor. Curabitur ultricies fringilla gravida.
      Phasellus tempor at ipsum id pharetra. Pellentesque eu augue gravida,
      malesuada neque at, consectetur est. Etiam tristique lacus nec dolor
      laoreet bibendum. In accumsan augue id mollis pharetra. Pellentesque
      tempor, ante id vestibulum cursus, dui diam dictum sapien, a convallis
      magna dolor nec nisl. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Nam id massa a mauris venenatis
      vulputate eget vel augue. Donec id dui non augue interdum euismod eu a
      ligula. Ut risus orci, faucibus vitae euismod at, pharetra in elit. Cras
      gravida hendrerit sem, nec laoreet magna porttitor quis. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Praesent rutrum ex risus, fringilla laoreet urna ornare eu. Ut ac elit
      neque. Integer nibh velit, pretium sed faucibus quis, gravida ac nunc.
      Nulla aliquam et odio vel sollicitudin. Nunc id lacinia ligula, vitae
      dictum tellus. Nullam commodo mollis ipsum ut aliquet. Pellentesque
      posuere, lectus a gravida fringilla, augue magna cursus leo, laoreet
      hendrerit tortor sem eget nisl. Curabitur congue leo nec velit mollis, at
      varius mauris aliquet. Proin eu semper urna. Donec arcu libero,
      ullamcorper quis ipsum viverra, porta rhoncus dolor. Suspendisse ac orci
      commodo, fringilla lectus eu, accumsan nunc. Donec mi risus, fringilla in
      pharetra sed, facilisis vel massa. In ante mauris, bibendum sed ex eu,
      venenatis dapibus quam. In semper lectus eget imperdiet sodales.
      consectetur orci quis iaculis consequat. Mauris commodo pulvinar dolor vel
      auctor. Donec interdum rhoncus diam, eu malesuada turpis feugiat ut. Nunc
      id luctus erat. Pellentesque est nunc, pulvinar non diam eu, accumsan
      luctus leo. Ut a pulvinar neque. Suspendisse auctor lectus eu diam blandit
      auctor. Curabitur varius, nulla vel luctus condimentum, mauris nisi
      pretium nunc, at aliquam metus mi nec nibh. Quisque pulvinar, turpis in
      elementum ultricies, sapien massa sodales nunc, quis tristique urna ligula
      id arcu. Donec volutpat, nunc eget tincidunt finibus, eros ipsum consequat
      urna, nec aliquet justo libero eget nisi. Maecenas semper neque nec dolor
      cursus rutrum. Vestibulum ut lectus at massa aliquam accumsan vel ut
      risus. Ut eget ligula magna. Maecenas congue porta quam, ut sollicitudin
      lacus cursus commodo. Aliquam eget tempor leo, eget rutrum lacus. Nunc
      luctus blandit felis, at suscipit ligula elementum nec. Mauris eu mauris
      tincidunt justo finibus scelerisque. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Suspendisse a
      consequat lectus. Nunc quis augue ut urna viverra auctor. Maecenas aliquet
      neque in maximus sollicitudin. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Vestibulum sit amet orci ornare, suscipit ex a, accumsan
      ante. Phasellus sed urna tortor. Curabitur ultricies fringilla gravida.
      Phasellus tempor at ipsum id pharetra. Pellentesque eu augue gravida,
      malesuada neque at, consectetur est. Etiam tristique lacus nec dolor
      laoreet bibendum. In accumsan augue id mollis pharetra. Pellentesque
      tempor, ante id vestibulum cursus, dui diam dictum sapien, a convallis
      magna dolor nec nisl. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Nam id massa a mauris venenatis
      vulputate eget vel augue. Donec id dui non augue interdum euismod eu a
      ligula. Ut risus orci, faucibus vitae euismod at, pharetra in elit. Cras
      gravida hendrerit sem, nec laoreet magna porttitor quis. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Praesent rutrum ex risus, fringilla laoreet urna ornare eu. Ut ac elit
      neque. Integer nibh velit, pretium sed faucibus quis, gravida ac nunc.
      Nulla aliquam et odio vel sollicitudin. Nunc id lacinia ligula, vitae
      dictum tellus. Nullam commodo mollis ipsum ut aliquet. Pellentesque
      posuere, lectus a gravida fringilla, augue magna cursus leo, laoreet
      hendrerit tortor sem eget nisl. Curabitur congue leo nec velit mollis, at
      varius mauris aliquet. Proin eu semper urna. Donec arcu libero,
      ullamcorper quis ipsum viverra, porta rhoncus dolor. Suspendisse ac orci
      commodo, fringilla lectus eu, accumsan nunc. Donec mi risus, fringilla in
      pharetra sed, facilisis vel massa. In ante mauris, bibendum sed ex eu,
      venenatis dapibus quam. In semper lectus eget imperdiet s
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
