import { useRive } from '@rive-app/react-canvas';
import Rive, {Fit} from '@rive-app/react-canvas';

export default function Simple({filename}) {
  const { rive, RiveComponent } = useRive({
    src: '/rive-animation-test-2/'+filename,
    autoplay: true,
    fit: Fit.ScaleDown,
  });

  return (
    <RiveComponent
    />
  );
}
