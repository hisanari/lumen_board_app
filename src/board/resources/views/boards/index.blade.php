<h1>board(view)</h1>
@foreach ( $boards as $board )
  <ul>
    <li>{{ $board->id}}</li>
    <li>{{ $board->title}}</li>
    <li>{{ $board->comment}}</li>
  </ul>
  <hr>
@endforeach