import { UniqueIdService } from "./unique-id.service";


describe('O artefato que queremos testar', () => {
    it('generateUniqueIdWithPrefix should generate id when called with prefix', () => {
      const service = new UniqueIdService();
      const id = service.generateUniqueIdWithPrefix('app');
      expect(id).toContain('app-');
    })
})