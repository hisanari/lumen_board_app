@foreach ($boards as $board)
  <ul>
    <li>{{ $board->title}}</li>
    <li>{{ $board->comment }}</li>
    <li>{{ $board->created_at }}</li>
    <li>{{ $board->updated_at }}</li>
  </ul>
@endforeach