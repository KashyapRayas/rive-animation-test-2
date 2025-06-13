import { useRive } from '@rive-app/react-canvas';
import Rive, {Fit} from '@rive-app/react-canvas';

export default function ThumbLiked() {
  const { rive, RiveComponent } = useRive({
    src: '/rive-animation-test-2/thumb_liked.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
    fit: Fit.ScaleDown,
  });

  return (
    <RiveComponent/>
  );
}
